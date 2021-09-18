import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View,Image, FlatList, TextInput, StatusBar, Pressable, ScrollView} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import styles from '../Styles/ChatRoomStyles'
import useChat from './UseChat'
import { UserContext } from "../Context/CurrentUser";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';







const ChatRoom = ({route, navigation}) =>{
    const info = useContext(UserContext)

    const isFocused = useIsFocused();
    
    let current_date = new Date()
    let current_year = current_date.getFullYear()
    let current_month = current_date.getMonth()
    let current_day = current_date.getDate()
    let current_hour = current_date.getHours()
    const [empty, setEmpty] = useState()
    const { v4: uuidv4 } = require('uuid');
    const [message, setMessage] = useState('')
    const {roomID} = route.params
    const [token,setToken] = useState('')
    const [room, setRoom] = useState([])
    const [answered, setAnswered] = useState()
    const [roomSavedMsgs, setRoomSavedMsgs] = useState([])


    /**
     * ==========
     * Get token
     * ==========
     */
     useEffect(()=>{ //On page load grab all the rooms
        let isMounted = true;

        if(isFocused){

          const getToken = async () => {
            try {
              const token = await AsyncStorage.getItem('session-key')
              if(token !== null) {
                setToken(token)
              }
            } catch(e) {
              // error reading value
            }
          }
          if(isMounted){
            getToken()
          }
        }
    
        return () => { isMounted = false };
      },[isFocused])
    /**
     * ==========
     * Get token
     * ==========
     */

    //Getting current room messages on page load
    useEffect(()=>{
        let isMounted = true;

        if(token.length !== 0){
            axios({
                method: 'GET',
                url: `https://fishbowl-heroku.herokuapp.com/chat/get/id/${roomID}`,
                headers: { "x-auth-token": `${token}` }
            }).then((res) => {
                if(isMounted){
                    setRoom(res.data[0]);
                    setAnswered(res.data[0].Answered)
                    setRoomSavedMsgs(res.data[0].Messages);
                }
            })

        }

        return () => { isMounted = false };
    },[token])

    /**
     * =======
     * Sockets 
     * =======
     */
    const { messages, sendMessage } = useChat(roomID); //Passing in the room ID into my useChat function which is within another component
    const [newMessage, setNewMessage] = useState('') //This stores a message that has currently been typed by a user and submitted
    /**
     * =======
     * Sockets 
     * =======
     */


    

    






    /**
     * ===================================
     * Handle message being sent
     * ===================================
     */

     const handleSendMessage = (props) => { //Function checks what user says



        if(Array.isArray(props)){ //If the message is either delete or helped then they have a seperate meaning
            if(props[0] === "delete"){
                sendMessage(props)
            }else if(props[0] === "clear" || props[0] == "helped"){
                sendMessage("clear")
            }
        }else{
            if (newMessage.length !== 0) { //Validating that new message is not empty

                sendMessage(newMessage); //Passing message into seperate function from other component
                setNewMessage(""); //Clearing new message because it has already been sent

                const data = { //Creating an object for the current message sent
                    text: newMessage,
                    sentBy: info.name,
                    sentByImage: info.image,
                    date: { year: current_date.getFullYear(), month: current_date.getMonth(), day: current_date.getDate(), hour: current_date.getHours() },
                    likes: [],
                    messageID: uuidv4(),
                    helped: false
                }
    
                axios({ //Uploading the message to the current rooms message array
                    method: `PUT`,
                    url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
                    headers: { "x-auth-token": `${token}` },
                    data: { message: data }
                }).then((res) => {
                    console.log('res: ', res.data);
                }).catch((error) => {
                    console.log("error", error)
                })
            } else {
                setEmpty(true)
            }
        }
       
    }
    /**
     * ===================================
     * Handle message being sent
     * ===================================
     */

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#212224ff" />
            <View style={styles.navHeader}>
                <View style={styles.goBack}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image
                        source={require('../SVG/left-arrow.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white'
                        }}
                        />
                    </Pressable>
                </View>
                <View style={styles.imgntxt}>
                    <Image style={styles.image} source={{uri: room.CreatedByImage}}/>
                    <Text style={styles.text}>{room.Title}</Text>
                </View>
            </View>
            
            <ScrollView style={styles.ScrollView}>
                <View style={styles.lower}>
                    <Text style={styles.Qtext}>{room.Question}</Text>
                </View>
                {messages.slice(0).reverse().map((message, i)=>(
                    <View style={styles.replyHolder} key={i}>
                    <View style={styles.top}>
                        <Pressable style={styles.userToClick}>
                            <Image style={styles.userImage} source={{uri: message.sentByImage}}/>
                            <Text style={styles.textProfile}>{message.sentBy}</Text>
                            <Text style={styles.textDate}>{`· ${current_year === message.date.year ? current_month === message.date.month ? current_day === message.date.day ? current_hour === message.date.hour ? `<1h` : current_hour - message.date.hour + `h` : current_day - message.date.day + `d` : current_month - message.date.month + `m` : current_year - message.date.year + `y`}`}</Text>
                        </Pressable>
                    </View>
                    <View style={styles.middle}>
                        <Text style={styles.replyText}>{message.text}</Text>
                    </View>
                    <View style={styles.bottom}>
                    </View>
                </View>
                ))}
                {roomSavedMsgs.slice(0).reverse().map((savedMessage, i)=>(
                    <View style={styles.replyHolder} key={i}>
                        <View style={styles.top}>
                            <Pressable style={styles.userToClick}>
                                <Image style={styles.userImage} source={{uri: savedMessage.sentByImage}}/>
                                <Text style={styles.textProfile}>{savedMessage.sentBy}</Text>
                                <Text style={styles.textDate}>{`· ${current_year === savedMessage.date.year ? current_month === savedMessage.date.month ? current_day === savedMessage.date.day ? current_hour === savedMessage.date.hour ? `<1h` : current_hour - savedMessage.date.hour + `h` : current_day - savedMessage.date.day + `d` : current_month - savedMessage.date.month + `m` : current_year - savedMessage.date.year + `y`}`}</Text>
                            </Pressable>
                        </View>
                        <View style={styles.middle}>
                            <Text style={styles.replyText}>{savedMessage.text}</Text>
                        </View>
                        <View style={styles.bottom}>
                        </View>
                    </View>
                ))}
                
            </ScrollView>
            <View style={styles.chatBar}>
                <Image style={styles.imageChatbar} source={{uri: info.image}}/>
                <TextInput style={styles.input} selectionColor={'white'} placeholder={'Message'} value={newMessage} placeholderTextColor="white" onChangeText={message => setNewMessage(message)}/>
                {newMessage.length !== 0? (
                    <Pressable onPress={handleSendMessage}>
                    <Image
                    source={require('../SVG/sendF.png')}
                    resizeMode='contain'
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: 'white'
                    }}
                    />
                </Pressable>
                ): null}
                
            </View>
        </View>
    )
}

export default ChatRoom;