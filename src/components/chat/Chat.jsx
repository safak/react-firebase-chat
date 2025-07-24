import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore"
import { db } from "../../lib/firebase"
import { useChatStore } from "../../lib/chatStore"
import { useUserStore } from "../../lib/userStore"
import upload from "../../lib/upload"
import { format } from "timeago.js";
import { v4 as uuidv4 } from "uuid";

// setting initial URL 
const webhookUrl = import.meta.env.VITE_WEB_HOOK_URL_N8N_CHAT;
console.log("webhookUrl is:", webhookUrl);

const Chat = () => {
  const greetedRef = useRef(false);
  const [chat, setChat] = useState({ messages: [] });
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [img, setImg] = useState({
    file: null,
    url: "",
  });

  const {
    chatId,
    participants,
    users,
    isCurrentUserBlocked,
    isReceiverBlocked,
  } = useChatStore();

  const { currentUser } = useUserStore();

  const endRef = useRef(null);

  const humanIds = participants.filter((uid) => !uid.startsWith("bot_"));
  const botId = participants.find((uid) => uid.startsWith("bot_"));
  const otherUserId = humanIds.find((uid) => uid !== currentUser.id);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat.messages]);

  useEffect(() => {
    if (!chatId) return;
    const unSub = onSnapshot(doc(db, "chats", chatId), (snap) => {
      setChat(snap.data() || { messages: [] });
    });
    return () => unSub();
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const greetUser = async () => {
    const botgreetMsgId = uuidv4();
    try {
      console.log("starting greeting node")
      // grab the fields you need
      const { username = "", email = "", language = "" } = currentUser;

      // fire n8n
      const resp = await fetch(
        "https://matastanamee120602.app.n8n.cloud/webhook/chat-greeting",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: chatId,
            username,
            email,
            language
          }),
        }
      );
      const body = await resp.json();
      const botText = Array.isArray(body)
        ? body[0].output.chatOutput
        : body.output.chatOutput;

      // write bot reply into Firestore
      const chatDocRefBot = doc(db, "chats", chatId);
      await updateDoc(chatDocRefBot, {
        messages: arrayUnion({
          id: botgreetMsgId,
          senderId: botId,
          text: botText,
          createdAt: new Date(),
          translations: {},
        }),
      });
      const ADMIN_USER_ID = "aqCzCkdzXXgio3Ws2lAnzciS0vl2";
      if (botId && humanIds.length === 2 && humanIds != ADMIN_USER_ID) {
        console.log("begin start condition translate chat from bot with user1 for Admin user")
        const bots = participants.filter(uid => uid.startsWith("bot_"));
        const payload = bots.map(uid => ({
          sessionId: chatId,
          Action: "sending text",
          chatInput: botText,
          Role: uid === botId ? "sender" : "receiver",
          // optional: Language: users[uid].language
        }));

        const resp = await fetch("https://matastanamee120602.app.n8n.cloud/webhook/chat-translate-detector", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const { output } = await resp.json();

        // re-read the chat doc to get the latest array
        const snap = await getDoc(chatDocRefBot);
        const arr = snap.data().messages || [];
        const idx = arr.findIndex((messages) => messages.id === botgreetMsgId);
        console.log(idx)
        if (idx < 0) {
          console.warn("Could not find newly‐written message");
          return;
        }

        // clone the one message and build up its `translations`
        const msg = { ...arr[idx] };
        // copy existing translations (if any)
        msg.translations = { ...msg.translations };


        for (const r of output) {
          console.log("this condition updated translation trigger")
          const targetUid =
            r.UserRole === "sender"
              ? botId
              : humanIds.find(u => u !== currentUser.id);
          msg.translations[targetUid] = r.Translate;
        }

        // updated translations field
        const newArr = [
          ...arr.slice(0, idx),
          msg,
          ...arr.slice(idx + 1),
        ];
        await updateDoc(chatDocRefBot, { messages: newArr });

        const snapCheck = await getDoc(chatDocRefBot);
        const msgcheck = snapCheck.data().messages[idx];
        console.log(msgcheck);
      }
    } catch (e) {
      console.error("greetUser error", e);
    }
  };

  useEffect(() => {
    if (!chatId) return;
    const unSub = onSnapshot(doc(db, "chats", chatId), (snap) => {
      const data = snap.data() || { messages: [] };
      setChat(data);

      // Only greet if we haven’t already, and there are zero messages
      if (!greetedRef.current && data.messages.length === 0) {
        greetedRef.current = true;
        greetUser();
      }
    });

    return () => unSub();
  }, [chatId]);

  const handleSend = async () => {
    if (!text.trim()) return;
    setText("");                       

    let imgUrl = null;
    // const msgId = uuidv4();

    const humanMsgId = uuidv4();

    const botMsgId = uuidv4();
    try {
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      const chatDocRef = doc(db, "chats", chatId);
      await updateDoc(chatDocRef, {
        messages: arrayUnion({
          id: humanMsgId,
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
          translations: {},
          ...(imgUrl && { img: imgUrl })
        }),
      });

      // re-fetch the up-to-date chat
      const chatSnap2 = await getDoc(doc(db, "chats", chatId));
      const msgs = chatSnap2.data().messages || [];

      // grab the last two entries
      const lastIndex = msgs.length - 1;
      const lastMsg = msgs[lastIndex];
      const prevMsg = msgs[lastIndex - 1];
      const ADMIN_USER_ID = "aqCzCkdzXXgio3Ws2lAnzciS0vl2";
      console.log("lastMsg.senderId:", lastMsg?.senderId);
      console.log("prevMsg.senderId:", prevMsg?.senderId);

      // last message is human  
      // previous message is either a bot, or doesn’t exist (start of convo)
      // or last message is Admin stopped to firing n8n
      if (
        lastMsg.senderId !== botId
        && !lastMsg.senderId.startsWith("bot_")
        && lastMsg.senderId !== ADMIN_USER_ID
        && (
          !prevMsg
          || prevMsg.senderId === botId
          || prevMsg.senderId.startsWith("bot_")
          || prevMsg.senderId === currentUser.id
        )
      ) {
        // exactly one human prompt since the bot
        console.log("triggering n8n webhook");
        const resp = await fetch( webhookUrl,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              senderId: currentUser.id,
              receiverId: humanIds.find(u => u !== currentUser.id),
              chatInput: text,
              language: currentUser.language,
              createdAt: new Date().toISOString(),
              img: imgUrl,
              sessionId: chatId,
            }),
          }
        );
        console.log("n8n status:", resp.status);
        const data = await resp.json();
        console.log("n8n returned:", data);
        const botText = data.output || data.body?.output || data.response?.body?.output;

        const chatDocRefBot = doc(db, "chats", chatId);
        await updateDoc(chatDocRefBot, {
          messages: arrayUnion({
            id: botMsgId,
            senderId: botId,
            text: botText,
            createdAt: new Date(),
            translations: {},
            ...(imgUrl && { img: imgUrl })
          }),
        });

        // translate current user text that not admin to language that admin user use
        if (currentUser.id != ADMIN_USER_ID) {
          console.log("begin start condition translate chat from user1 with bot for Admin user")
          const humanIds = participants.filter(uid => !uid.startsWith("bot_"));
          const payload = humanIds.map((uid) => {
            const ownLang = uid === currentUser.id
              ? currentUser.language
              : users[uid]?.language;
            console.log(`for UID=${uid}, language=`, ownLang);
            return {
              sessionId: chatId,
              Action: "sending text",
              chatInput: text,
              Role: uid === currentUser.id ? "sender" : "receiver",
              Language: ownLang || "en",
            };
          });

          const resp = await fetch("https://matastanamee120602.app.n8n.cloud/webhook/chat-translate-detector", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          const { output } = await resp.json();

          // re-read the chat doc to get the latest array
          const snap = await getDoc(chatDocRef);
          const arr = snap.data().messages || [];
          const idx = arr.findIndex((messages) => messages.id === humanMsgId);
          console.log(idx)
          if (idx < 0) {
            console.warn("Could not find newly‐written message");
            return;
          }

          // clone the one message and build up its `translations`
          const msg = { ...arr[idx] };
          // copy existing translations (if any)
          msg.translations = { ...msg.translations };


          for (const r of output) {
            console.log("this condition updated translation trigger")
            const targetUid =
              r.UserRole === "sender"
                ? currentUser.id
                : humanIds.find(u => u !== currentUser.id);
            msg.translations[targetUid] = r.Translate;
          }

          // updated translations field
          const newArr = [
            ...arr.slice(0, idx),
            msg,
            ...arr.slice(idx + 1),
          ];
          await updateDoc(chatDocRef, { messages: newArr });

          const snapCheck = await getDoc(chatDocRef);
          const msgcheck = snapCheck.data().messages[idx];
          console.log(msgcheck);
        }

        if (botId && humanIds.length === 2 && humanIds != ADMIN_USER_ID) {
          console.log("begin start condition translate chat from bot with user1 for Admin user")
          const bots = participants.filter(uid => uid.startsWith("bot_"));
          const payload = bots.map(uid => ({
            sessionId: chatId,
            Action: "sending text",
            chatInput: botText,
            Role: uid === botId ? "sender" : "receiver",
            // optional: Language: users[uid].language
          }));

          const resp = await fetch("https://matastanamee120602.app.n8n.cloud/webhook/chat-translate-detector", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          const { output } = await resp.json();

          // re-read the chat doc to get the latest array
          const snap = await getDoc(chatDocRefBot);
          const arr = snap.data().messages || [];
          const idx = arr.findIndex((messages) => messages.id === botMsgId);
          console.log(idx)
          if (idx < 0) {
            console.warn("Could not find newly‐written message");
            return;
          }

          // clone the one message and build up its `translations`
          const msg = { ...arr[idx] };
          // copy existing translations (if any)
          msg.translations = { ...msg.translations };


          for (const r of output) {
            console.log("this condition updated translation trigger")
            const targetUid =
              r.UserRole === "sender"
                ? botId
                : humanIds.find(u => u !== currentUser.id);
            msg.translations[targetUid] = r.Translate;
          }

          // updated translations field
          const newArr = [
            ...arr.slice(0, idx),
            msg,
            ...arr.slice(idx + 1),
          ];
          await updateDoc(chatDocRefBot, { messages: newArr });

          const snapCheck = await getDoc(chatDocRefBot);
          const msgcheck = snapCheck.data().messages[idx];
          console.log(msgcheck);
        }

      } else {
        console.log("skipping n8n node bots doing translate");
        console.log("begin start condition translate chat from user with user")
        const humanIds = participants.filter(uid => !uid.startsWith("bot_"));
        const payload = humanIds.map((uid) => {
          const ownLang = uid === currentUser.id
            ? currentUser.language
            : users[uid]?.language;
          console.log(`for UID=${uid}, language=`, ownLang);
          return {
            sessionId: chatId,
            Action: "sending text",
            chatInput: text,
            Role: uid === currentUser.id ? "sender" : "receiver",
            Language: ownLang || "en",
          };
        });

        const resp = await fetch("https://matastanamee120602.app.n8n.cloud/webhook/chat-translate-detector", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const { output } = await resp.json();

        // re-read the chat doc to get the latest array
        const snap = await getDoc(chatDocRef);
        const arr = snap.data().messages || [];
        const idx = arr.findIndex((messages) => messages.id === humanMsgId);
        console.log(idx)
        if (idx < 0) {
          console.warn("Could not find newly‐written message");
          return;
        }

        // clone the one message and build up its `translations`
        const msg = { ...arr[idx] };
        // copy existing translations (if any)
        msg.translations = { ...msg.translations };


        for (const r of output) {
          console.log("this condition updated translation trigger")
          const targetUid =
            r.UserRole === "sender"
              ? currentUser.id
              : humanIds.find(u => u !== currentUser.id);
          msg.translations[targetUid] = r.Translate;
        }

        // updated translations field
        const newArr = [
          ...arr.slice(0, idx),
          msg,
          ...arr.slice(idx + 1),
        ];
        await updateDoc(chatDocRef, { messages: newArr });

        const snapCheck = await getDoc(chatDocRef);
        const msgcheck = snapCheck.data().messages[idx];
        console.log(msgcheck);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
      setImg({
        file: null,
        url: "",
      });
    }
  };

  const headerProfile =
    botId && participants.length === 2
      ? users[botId]
      : users[otherUserId];

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src={headerProfile?.avatar || "./avatar.png"} alt="" />
          <div className="texts">
            <span>{headerProfile?.username}</span>
            <p>Testing Chatbot.</p>
          </div>
        </div>
        {/* <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div> */}
      </div>
      <div className="center">
        {chat.messages.map((message) => {
          {/* {messages.map(message => { */ }
          // pick the right text for this user (or fall back)
          const ADMIN_USER_ID = "aqCzCkdzXXgio3Ws2lAnzciS0vl2";
          const isBotMessage = message.senderId === botId;
          const isAdmin = currentUser.id === ADMIN_USER_ID;

          const lookupKey = (isAdmin && isBotMessage)
            ? botId
            : currentUser.id;

          const displayText =
            message.translations?.[currentUser.id]
            || message.translations?.[lookupKey]
            || message.text;

          const isOwn =
            message.senderId === currentUser.id ||
            (isAdmin && isBotMessage);

          return (
            <div
              key={message.id}
              className={isOwn ? "message own" : "message"}
            >
              <div className="texts">
                {message.img && <img src={message.img} alt="" />}
                <p>{displayText}</p>
                <span>{format(message.createdAt.toDate())}</span>
              </div>
            </div>
          );
        })}
        {img.url && (
          <div className="message own">
            <div className="texts">
              <img src={img.url} alt="" />
            </div>
          </div>
        )}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          {/* <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" /> */}
        </div>
        <input
          type="text"
          placeholder={
            isCurrentUserBlocked || isReceiverBlocked
              ? "You cannot send a message"
              : "Type a message..."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button
          className="sendButton"
          onClick={handleSend}
          type="button"
          disabled={isCurrentUserBlocked || isReceiverBlocked}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;