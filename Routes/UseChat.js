import { useEffect, useRef, useState, useContext } from "react";
import socketIOClient from "../node_modules/socket.io/client-dist/socket.io";
import { UserContext } from "../Context/CurrentUser";



const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "https://fishbowl-heroku.herokuapp.com";
const useChat = (roomId) => {
const [messages, setMessages] = useState([]); // Sent and received messages
const socketRef = useRef();
const info = useContext(UserContext)



  useEffect(() => { //A new connection is made whenever room ID changes


    let isMounted = true;

    if(isMounted){

      socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
        query: { roomId },
      }); //setting socketRef.current to current socket
  
      // Listens for incoming messages
      socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => { //Socket starts to listen for a new message event, it takes this message as a prop and sets it as incoming message
        console.log('message: ', message);

  

        //Conditionally, deleting, clearing or marking as helped current messages.
  
        if(message.text === "delete"){
          setMessages(messages.filter(item => item.messageID !== message.messageID))
        }else{
          setMessages((messages) => [...messages, message]);
        }

        //Conditionally, deleting, clearing or marking as helped current messages.
      });
    }
  
    // Destroys the socket reference
    return () => {
      socketRef.current.disconnect();
      isMounted = false
    };
  }, [roomId]);

  
  const sendMessage = (props) => { //Message is sent to server then it is passed to all the users in the same room
    var currentdate = new Date();
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, { //Emitting to the server
      text: props[0],
      senderId: socketRef.current.id,
      sentByID: info.id,
      messageID: props[1],
      sentByName: info.name,
      sentByImage: info.image,
      date: { year: currentdate.getFullYear(), month: currentdate.getMonth(), day: currentdate.getDate(), hour: currentdate.getHours() },
      likes: []
    });
  };

  return { messages, sendMessage };
};

export default useChat;