import { useCallback, useEffect, useRef, useState } from "react";

export function useEmojiPickerState(key) {
  const [open, setOpen] = useState(false);

  // Refs
  const endRef = useRef(null);
  const emojiContainerRef = useRef(null);
  const messageInputRef = useRef(null);

  const closeEmojiContainer = useCallback(() => {
    setOpen(false);
  }, []);

  // Detecting Button press to close the Emoji Container.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key) {
        closeEmojiContainer();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, closeEmojiContainer]);

  // Detecting Clicks Outside the Emoji Container.
  const handleClickOutside = useCallback(
    function handleClickOutside(e) {
      if (
        emojiContainerRef.current &&
        !messageInputRef.current.contains(e.target) &&
        !emojiContainerRef.current.contains(e.target)
      ) {
        closeEmojiContainer();
      }
    },
    [closeEmojiContainer],
  );

  // Effect to add Event Listener for "MOUSE_DOWN" event to close Emoji Container.
  useEffect(() => {
    if (open) document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, handleClickOutside]);

  return [
    open,
    closeEmojiContainer,
    endRef,
    emojiContainerRef,
    messageInputRef,
    setOpen,
  ];
}
