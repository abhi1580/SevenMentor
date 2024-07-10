import { useEffect } from "react";
import connectToChatService from "./conectToChat";

//Custom Hook
export default function useChatRoom(roomId, serverUrl) {
  //calling useEffect hook to connect external chatService

  useEffect(() => {
    //setup function to connect to chat service
    const connection = connectToChatService(roomId, serverUrl);
    connection.connect();
    //return cleanup function

    return () => {
      //clean up function to disconnect to chat service
      connection.disconnect();
    };
  }, [roomId, serverUrl]); //passing dependancies array - state , props
}
