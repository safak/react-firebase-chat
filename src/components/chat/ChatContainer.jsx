import { useEffect, useRef } from "react";

function ChatContainer({ children }) {
  const endRef = useRef(null);

  const handleScroll = function () {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
  });

  return (
    <div className="flex flex-1 flex-col gap-5 overflow-scroll p-5">
      {children}
      <div ref={endRef}></div>
    </div>
  );
}

export default ChatContainer;
