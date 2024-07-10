import React, { useState, } from "react";
import useChatRoom from "./useChatRoom";

const ChatRoom = ({ roomId }) => {
  const [serverUrl, setServerUrl] = useState("hhtps://hostname:port/music");
useChatRoom(roomId,serverUrl) //calling custom hook
  return (
    <div>
      <input className="form-control"
        placeholder="Enter Chat Room Server URL to Connect"
        value={serverUrl}
        onChange={(e) => setServerUrl(e.target.value)}
      />
    </div>
  );
};

export default ChatRoom;
