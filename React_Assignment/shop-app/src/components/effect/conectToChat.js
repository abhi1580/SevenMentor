//business logic function
export default function connectToChatService(roomId, serverUrl) {
  return {
    connect: () => {
      console.log(`Connected to chatroom ${roomId} at ${serverUrl}`);
    },
    disconnect: () => {
      console.log(`Disconnected from chatroom ${roomId} at ${serverUrl}`);
    },
  };
}
