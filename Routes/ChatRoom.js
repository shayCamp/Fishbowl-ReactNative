import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View,Image, FlatList, TextInput, StatusBar, Pressable, ScrollView,} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import styles from '../Styles/ChatRoomStyles'
import useChat from './UseChat'
import { UserContext } from "../Context/CurrentUser";
import { Swipeable } from 'react-native-gesture-handler';
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
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const [empty, setEmpty] = useState()
    const { v4: uuidv4 } = require('uuid');
    const [message, setMessage] = useState('')
    const [token,setToken] = useState('')
    const [editedQuestion, setEditedQuestion] = useState("")
    const [editedTitle, setEditedTitle] = useState("")
    const [room, setRoom] = useState([])
    const [answered, setAnswered] = useState()
    const [settingsVisible, setSettingsVisible] = useState(false)
    const [roomTitle, setRoomTitle] = useState('')
    const [roomQuestion, setRoomQuestion] = useState('')


    useEffect(()=>{
        let isMounted = true;
            axios({
                method: 'GET',
                url: `https://fishbowl-heroku.herokuapp.com/chat/get/${roomId}`,
                headers: { "x-auth-token": `${info.token}` }
            }).then((res) => {
                if(isMounted){
                    setRoom(res.data[0]);
                    setRoomTitle(res.data[0].Title)
                    setRoomQuestion(res.data[0].Question)
                    setAnswered(res.data[0].Answered)
                    setRoomSavedMsgs(res.data[0].Messages);
                }
            }).catch((err)=>{
                console.log(err)
            })
        return () => { isMounted = false };
    },[])

    /**
     * =======
     * Sockets 
     * =======
     */
     const {roomId} = route.params
    const { messages, sendMessage } = useChat(roomId); //Passing in the room ID into my useChat function which is within another component
    const [newMessage, setNewMessage] = useState('') //This stores a message that has currently been typed by a user and submitted
    const [roomSavedMsgs, setRoomSavedMsgs] = useState([])

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
            if(props[0] === "delete"){
                sendMessage([props[0], props[1]]); //Passing message into seperate function from other component
            }
            if (newMessage.length !== 0) { //Validating that new message is not empty
                const messageID = uuidv4();


                sendMessage([newMessage, messageID]); //Passing message into seperate function from other component
                setNewMessage(""); //Clearing new message because it has already been sent


                const data = { //Creating an object for the current message sent
                    text: newMessage,
                    sentByID: info.id,
                    sentByName: info.name,
                    sentByImage: info.image,
                    messageID: messageID,
                    date: { year: current_date.getFullYear(), month: current_date.getMonth(), day: current_date.getDate(), hour: current_date.getHours() },
                    likes: [],
                    helped: false
                }
    
                axios({ //Uploading the message to the current rooms message array
                    method: `PUT`,
                    url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
                    headers: { "x-auth-token": `${info.token}` },
                    data: { message: data }
                }).then((res) => {
                }).catch((error) => {
                    console.log("error", error)
                })
            } else {
                setEmpty(true)
            }
        }
       
    
    /**
     * ===================================
     * Handle message being sent
     * ===================================
     */

    /**
     * ========================================
     * Redirect to user through comment section
     * ========================================
     */

     const redirectToUser = (props) => {

        axios({
            method: "GET",
            url: `https://fishbowl-heroku.herokuapp.com/users/get/${props}`,
            headers: { "x-auth-token": `${info.token}` }
        }).then((response) => {
            navigation.navigate('Profile', {profile: response.data[0]._id})
        }).catch((error) => {
            console.log("error:", error)
        })
    }


    /**
     * ========================================
     * Redirect to user through comment section
     * ========================================
     */

     const updateQuestion = () => {

        if (editedQuestion.length > 0 && editedTitle.length > 0) {
            setRoomTitle(editedTitle)
            setRoomQuestion(editedQuestion)
            setSettingsVisible(false)


            axios({
                method: `PUT`,
                url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
                headers: { "x-auth-token": `${info.token}` },
                data: {Question: editedQuestion, Title: editedTitle }
            }).then((res) => {
                setEditedQuestion('')
                setEditedTitle('')
            }).catch((error) => {
                console.log("error", error)
            })
        }else if(editedTitle.length > 0 && !editedQuestion.length > 0){
            setRoomTitle(editedTitle)
            setSettingsVisible(false)

            axios({
                method: `PUT`,
                url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
                headers: { "x-auth-token": `${info.token}` },
                data: {Title: editedTitle }
            }).then((res) => {
                setEditedTitle('')
            }).catch((error) => {
                console.log("error", error)
            })
        }else if(!editedTitle.length > 0 && editedQuestion.length > 0){
            setRoomQuestion(editedQuestion)
            setSettingsVisible(false)


            axios({
                method: `PUT`,
                url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
                headers: { "x-auth-token": `${info.token}` },
                data: {Question: editedQuestion}
            }).then((res) => {
                setEditedQuestion('')
            }).catch((error) => {
                console.log("error", error)
            })
        }
    }

    



    const leftSwipe = (props) =>{
        return(
            <Pressable style={styles.helpedBox} onPress={()=>{markComment(props); handleSendMessage(["delete",props[0]])}}>
                <Text>{props[1]? `Mark as helped`: `Unmark`}</Text>
            </Pressable>
        )
    }

    const array = [
        ...messages.slice(0).reverse(),
        ...roomSavedMsgs.slice(0).reverse()
    ]

    // const deleteComment = () =>{ 
        
    //     //Delete the comment from database whenever clicked
    //     axios({
    //         method: 'PUT',
    //         url: `https://fishbowl-heroku.herokuapp.com/chat/update/${room._id}`,
    //         headers: { "x-auth-token": `${info.token}` },
    //         data: { messageID: id }
    //     }).then((res) => {
    //         console.log('res: ', res.data);
    //     }).catch((error) => {
    //         console.log("error:", error)
    //     })
    // }

    const markComment = (propData) =>{ //Marked the comment as helped
        axios({
            method: 'PUT',
            url: `https://fishbowl-heroku.herokuapp.com/chat/update/${roomId}`,
            headers: { "x-auth-token": `${info.token}` },
            data: { helped: propData }
        }).then((res) => {
            refreshComments()
        }).catch((error) => {
            console.log("error:", error)
        })

    }

    const refreshComments = () =>{ //This updates the stored messages for when user goes into editing mode, does not update live feed
        axios({
            method: 'GET',
            url: `https://fishbowl-heroku.herokuapp.com/chat/get/${roomId}`,
            headers: { "x-auth-token": `${info.token}` }
        }).then((res) => {
                setRoomSavedMsgs(res.data[0].Messages);
        })
    }

    const header =() =>{
        return(
            <View style={settingsVisible? styles.lowerColumn :styles.lower}>
                    {settingsVisible? (
                        <>
                            <Text style={styles.roomDetails}>Room Details</Text>
                            <TextInput placeholder={`Change Title: "${room.Title}"`} placeholderTextColor='rgba(255,255,255,0.5)' multiline={true} selectionColor={'rgba(255,255,255,0.3)'} maxLength={300} value={editedTitle} style={styles.inputEdit} onChangeText={(t)=>setEditedTitle(t)}></TextInput>
                            <TextInput maxLength={1000} placeholder={`Change Question: "${room.Question}"`} placeholderTextColor='rgba(255,255,255,0.5)' multiline={true} selectionColor={'rgba(255,255,255,0.3)'} value={editedQuestion} style={styles.inputEdit} onChangeText={(q)=>setEditedQuestion(q)}></TextInput>
                            {editedQuestion.length > 0 || editedTitle.length > 0?(
                                <View style={styles.submitBtnHolder}>
                                    <Pressable onPress={()=>updateQuestion()} style={styles.submitBtn} >
                                        <Text style={styles.saveChangesText}>Save Changes</Text>
                                    </Pressable>
                                </View>
                            ):null}
                        </>
                    ): (
                        <>
                            <View style={styles.left}>
                                <Image style={styles.image} source={{uri: room.CreatedByImage}}/>
                            </View>
                            <View style={styles.right}>
                                <Text style={styles.Otext}>{room.CreatedByName} - Question:</Text>
                                <Text style={styles.Qtext}>{roomQuestion}</Text>
                            </View>
                        </>
                    )}
                </View>
        )
    }

    

    return(
        <View style={styles.container}>
            <View style={styles.navHeader}>
                <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                    <View >
                            <Image
                            source={require('../SVG/left-arrow.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white'
                            }}
                            />
                    </View>
                </Pressable>
                <View style={styles.imgntxt}>
                    <Text style={styles.text}>{settingsVisible?`Settings`:roomTitle}</Text>
                </View>
                {room.CreatedByName === info.name?(
                    <Pressable style={styles.edit} onPress={()=> setSettingsVisible(!settingsVisible)}>
                    <Image style={styles.settingsIcon} source={require('../SVG/settings.png')}/>
                
                    </Pressable>
                ):(
                    <View style={styles.edit}/>
                )}
                
            </View>
                <FlatList 
                data={array}
                keyboardShouldPersistTaps='always'
                ListHeaderComponent={header}
                keyExtractor={(item, index) => {
                    return  index.toString();
                   }}
                renderItem={({item})=>
                    room.CreatedByName === info.name?(
                        <Swipeable disableRightSwipe={true} renderLeftActions={()=>leftSwipe([item.messageID, !item.helped])}>
                        <View style={styles.replyHolder}>
                            <View style={styles.top}>
                                <Pressable style={styles.userToClick} onPress={() => redirectToUser(item.sentByID)}>
                                    <Image style={styles.userImage} source={{uri: item.sentByImage}}/>
                                    <Text style={styles.textProfile}>{item.sentByName}</Text>
                                    <Text style={styles.textDate}>{`· ${current_year === item.date.year ? current_month === item.date.month ? current_day === item.date.day ? current_hour === item.date.hour ? `<1h` : current_hour - item.date.hour + `h` : current_day - item.date.day + `d` : `${item.date.day} ${months[item.date.month].substring(0,3)}` : current_year - item.date.year + `y`}`}</Text>
                                </Pressable>
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.replyText}>{item.text}</Text>
                            </View>
                            <View style={styles.bottom}>
                                {item.helped?(
                                    <View style={styles.helpedReply} >
                                        <Text style={styles.saveChangesText}>This Reply Helped</Text>
                                    </View>
                                ): null}
                            </View>
                        </View>
                    </Swipeable>
                    ): (
                        <View style={styles.replyHolder}>
                            <View style={styles.top}>
                                <Pressable style={styles.userToClick} onPress={() => redirectToUser(item.sentByID)}>
                                    <Image style={styles.userImage} source={{uri: item.sentByImage}}/>
                                    <Text style={styles.textProfile}>{item.sentByName}</Text>
                                    <Text style={styles.textDate}>{`· ${current_year === item.date.year ? current_month === item.date.month ? current_day === item.date.day ? current_hour === item.date.hour ? `<1h` : current_hour - item.date.hour + `h` : current_day - item.date.day + `d` : `${item.date.day} ${months[item.date.month].substring(0,3)}` : current_year - item.date.year + `y`}`}</Text>
                                </Pressable>
                            </View>
                            <View style={styles.middle}>
                                <Text style={styles.replyText}>{item.text}</Text>
                            </View>
                            <View style={styles.bottom}>
                                {item.helped?(
                                    <View style={styles.helpedReply} >
                                        <Text style={styles.saveChangesText}>This Reply Helped</Text>
                                    </View>
                                ): null}
                            </View>
                        </View>
                    )
                }/>
            <View style={styles.chatBar}>
                <Image style={styles.imageChatbar} source={{uri: info.image}}/>
                <TextInput style={styles.input} selectionColor={'white'} placeholder={'Message'} value={newMessage} placeholderTextColor="white" onChangeText={message => setNewMessage(message)}/>
                {newMessage.length !== 0? (
                    <Pressable onPress={handleSendMessage} style={styles.sendBtn}>
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