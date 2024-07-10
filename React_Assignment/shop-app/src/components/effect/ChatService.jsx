import React, { useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatService = () => {
  const [chatRoom, setChatRoom] = useState("music");
  const [showChat, setShowChat] = useState(false);
  return (
    <div className="container">
      <label className="form-label" htmlFor="ct">
        Select Chat Room
      </label>
      <select
        className="form-select"
        value={chatRoom}
        onChange={(e) => setChatRoom(e.target.value)}
      >
        <option value="music">Music</option>
        <option value="news">News</option>
        <option value="career">Career</option>
        <option value="travel">Travel</option>
      </select>
      <button className="btn btn-secondary" onClick={()=>setShowChat(!showChat)}>{showChat? "Close Chat" : "Open Chat"}</button>
      {showChat && <ChatRoom roomId={chatRoom} />}

    </div>
  );
};

export default ChatService;
