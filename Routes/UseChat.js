import { useEffect, useRef, useState, useContext } from "react";
import socketIOClient from "../node_modules/socket.io/client-dist/socket.io";
import { UserContext } from "../Context/CurrentUser";


const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "https://fishbowl-heroku.herokuapp.com";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();
  const info = useContext(UserContext)

  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    
    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  
  const sendMessage = (messageBody) => { //Message is sent to server then it is passed to all the users in the same room
    console.log('messageBody: ', messageBody);
    var currentdate = new Date();

    if(messageBody[0] === "delete"){
      setMessages(messages.filter(message => message.messageID !== messageBody[1]));
    }else{
      socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, { //Emitting to the server
        text: messageBody[0],
        senderId: socketRef.current.id,
        sentByID: info.id,
        messageID: messageBody[1],
        sentByName: info.name,
        sentByImage: info.image,
        date: { year: currentdate.getFullYear(), month: currentdate.getMonth(), day: currentdate.getDate(), hour: currentdate.getHours() },
        likes: []
      });
    }
  };

  return { messages, sendMessage };
};

export default useChat;