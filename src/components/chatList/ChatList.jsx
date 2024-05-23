import "./chatList.css";

const ChatList = () => {
  // state de depart à false
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      <div className="searc">
        <div className="searchBar">
          <img src="/.search.png" alt="" />
          <input type="text" placeholder="Chercher..." />
        </div>
      </div>

      // si addMode est true, on affiche le bouton add sinon on affiche le
      bouton minus

      <img
        src={addMode ? "./minus.png" : "./plus.png"}
        alt="add"
        className="add"
        onClick={() => setAddMode((prev) => !prev)}
        
      />
      <div className="item">
        <img src="./avatar.png" alt="avatar" />

        <div className="texts">
          <span>Khedy Enami</span>
          <span>Salut, comment ça va ?</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
