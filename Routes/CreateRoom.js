import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect, useContext} from 'react';
import { StyleSheet,Keyboard, Text, View,Pressable, Image, TextInput } from 'react-native';
import styles from '../Styles/CreateRoomStyles'
import { UserContext } from "../Context/CurrentUser";
import axios from 'axios';






const CreateRoom = ({navigation}) => {
  const info = useContext(UserContext)
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);


  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  

    const [title, setTitle] = useState("")
    const [roomExists, setRoomExists] = useState(false)
    const [question, setQuestion] = useState("")
    const [Math, setMath] = useState(false)
    const [English, setEnglish] = useState(false)
    const [Geography, setGeography] = useState(false)
    const [FM, setFM] = useState(false)
    const [CS, setCS] = useState(false)
    const [Economics, setEconomics] = useState(false)
    const [History, setHistory] = useState(false)
    const [Biology, setBiology] = useState(false)
    const [Psychology, setPsychology] = useState(false)
    const [Physics, setPhysics] = useState(false)
    const [Politics, setPolitics] = useState(false)
    const [Music, setMusic] = useState(false)
    const [RE, setRE] = useState(false)
    const [chatting, setChatting] = useState(false)
    const [university, setUniversity] = useState(false)
    const [alevel, setALevel] = useState(false)
    const [gcse, setGCSE] = useState(false)
    const [football, setFootball] = useState(false)
    const [thoughts, setThoughts] = useState(false)
    const [sixth, setSixth] = useState(false)

    const handleSubmit = () => {
      var currentdate = new Date();



      if (title.trim().length) { //Checking if room name is not empty

              let tags = { //Temporary object to store current option by user
                  Math: Math,
                  English: English,
                  Geography: Geography,
                  FM: FM,
                  CS: CS,
                  Economics: Economics,
                  History: History,
                  Biology: Biology,
                  Psychology: Psychology,
                  Physics: Physics,
                  Politics: Politics,
                  Music: Music,
                  RE: RE,
                  Chatting:chatting,
                  University: university,
                  "A-Level": alevel,
                  GCSE: gcse,
                  Football: football,
                  "Thoughts?": thoughts,
                  "Sixth Form": sixth
              }
  
              let chosenArray = Object.keys(tags).filter((e)=>tags[e]) //Filtering array to only show tags which are true
  
              const data = { //Creating an object to send to db
                  CreatedByID: info.id,
                  CreatedByName: info.name,
                  CreatedByImage: info.image,
                  Tags: chosenArray,
                  Deleted: false,
                  Title: title,
                  Question: question,
                  Answered: false,
                  Date: { year: currentdate.getFullYear(), month: currentdate.getMonth(), day: currentdate.getDate(), hour: currentdate.getHours() }
              }
      
              axios({ //Uploadinf room options to the database
                  method: `POST`,
                  url: `https://fishbowl-heroku.herokuapp.com/chat/new`,
                  headers: { "x-auth-token": `${info.token}` },
                  data: data
              })
              .then((res) => {
                  if (res.data.msg === "Room name already exists") {
                      setRoomExists(true)
                      setTitle('')
                  } else {
                      setRoomExists(false)
                      setTitle('')
                      setQuestion('')
                      setMath(false)
                      setEnglish(false)
                      setGeography(false)
                      setFM(false)
                      setCS(false)
                      setEconomics(false)
                      setHistory(false)
                      setBiology(false)
                      setPsychology(false)
                      setPhysics(false)
                      setPolitics(false)
                      setMusic(false)
                      setChatting(false)
                      setUniversity(false)
                      setALevel(false)
                      setGCSE(false)
                      setFootball(false)
                      setThoughts(false)
                      setSixth(false)
                      navigation.navigate('ChatRoom', {roomId: res.data._id})
                  }
              })
              .catch((error) => {
                  console.log('error: ', error);
              })    
      } 
  }


  return(
      <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.goBack} onPress={() => navigation.goBack()}>
                    <View >
                            <Image
                            source={require('../SVG/cancel.png')}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white'
                            }}
                            />
                    </View>
                </Pressable>
                <View style={styles.Title}>
                    <Text style={styles.text}>Create Room</Text>
                </View>
                <Pressable style={styles.spacing} onPress={()=>handleSubmit()}>
                  <Text style={styles.postText}>Post</Text>
                </Pressable>
          </View>
          <View style={styles.mainSection}>
            <TextInput placeholder={roomExists? "Room Name already exists": "Title - Keep it short and sweet"} placeholderTextColor='rgba(255,255,255,0.5)' multiline={true} selectionColor={'rgba(255,255,255,0.3)'} maxLength={300} value={title} style={styles.input} onChangeText={(t)=>setTitle(t)}></TextInput>
            <TextInput maxLength={1000} placeholder="Question - Get some help lol" placeholderTextColor='rgba(255,255,255,0.5)' multiline={true} selectionColor={'rgba(255,255,255,0.3)'} value={question} style={styles.inputQ} onChangeText={(q)=>setQuestion(q)}></TextInput>
          </View>
          {keyboardStatus?null:(
              <View style={styles.boxes}>
              <View style={styles.boxHolder}>
                  <Pressable style={Math ? styles.tagSelected : styles.tag} onPress={() => setMath(!Math)}><Text style={Math?styles.textSelected:styles.tagText}>Math</Text></Pressable>
                  <Pressable style={English ? styles.tagSelected : styles.tag} onPress={() => setEnglish(!English)}><Text style={English?styles.textSelected:styles.tagText}>English</Text></Pressable>
                  <Pressable style={Geography ? styles.tagSelected : styles.tag} onPress={() => setGeography(!Geography)}><Text style={Geography?styles.textSelected:styles.tagText}>Geography</Text></Pressable>
                  <Pressable style={FM ? styles.tagSelected : styles.tag} onPress={() => setFM(!FM)}><Text style={FM?styles.textSelected :styles.tagText}>FM</Text></Pressable>
                  <Pressable style={CS ? styles.tagSelected : styles.tag} onPress={() => setCS(!CS)}><Text style={CS?styles.textSelected:styles.tagText}>CS</Text></Pressable>
                  <Pressable style={Economics ? styles.tagSelected : styles.tag} onPress={() => setEconomics(!Economics)}><Text style={Economics?styles.textSelected:styles.tagText}>Economics</Text></Pressable>
                  <Pressable style={History ? styles.tagSelected : styles.tag} onPress={() => setHistory(!History)}><Text style={History? styles.textSelected :styles.tagText}>History</Text></Pressable>
                  <Pressable style={Biology ? styles.tagSelected : styles.tag} onPress={() => setBiology(!Biology)}><Text style={Biology?styles.textSelected:styles.tagText}>Biology</Text></Pressable>
                  <Pressable style={Psychology ? styles.tagSelected : styles.tag} onPress={() => setPsychology(!Psychology)}><Text style={Psychology?styles.textSelected:styles.tagText}>Psychology</Text></Pressable>
                  <Pressable style={Physics ? styles.tagSelected : styles.tag} onPress={() => setPhysics(!Physics)}><Text style={Physics?styles.textSelected:styles.tagText}>Physics</Text></Pressable>
                  <Pressable style={Politics ? styles.tagSelected : styles.tag} onPress={() => setPolitics(!Politics)}><Text style={Politics?styles.textSelected:styles.tagText}>Politics</Text></Pressable>
                  <Pressable style={Music ? styles.tagSelected : styles.tag} onPress={() => setMusic(!Music)}><Text style={Music?styles.textSelected:styles.tagText}>Music</Text></Pressable>
                  {/* <Pressable style={RE ? styles.tagSelected : styles.tag} onPress={() => setRE(!RE)}><Text style={RE?styles.textSelected:styles.tagText}>RE</Text></Pressable> */}
                  <Pressable style={chatting ? styles.tagSelected : styles.tag} onPress={() => setChatting(!chatting)}><Text style={chatting? styles.textSelected:styles.tagText}>Chatting</Text></Pressable>
                  <Pressable style={university ? styles.tagSelected : styles.tag} onPress={() => setUniversity(!university)}><Text style={university?styles.textSelected:styles.tagText}>University</Text></Pressable>
                  <Pressable style={alevel ? styles.tagSelected : styles.tag} onPress={() => setALevel(!alevel)}><Text style={alevel?styles.textSelected:styles.tagText}>A-Level</Text></Pressable>
                  <Pressable style={gcse ? styles.tagSelected : styles.tag} onPress={() => setGCSE(!gcse)}><Text style={gcse?styles.textSelected:styles.tagText}>GCSE</Text></Pressable>
                  <Pressable style={football ? styles.tagSelected : styles.tag} onPress={() => setFootball(!football)}><Text style={football? styles.textSelected:styles.tagText}>Football</Text></Pressable>
                  <Pressable style={thoughts ? styles.tagSelected : styles.tag} onPress={() => setThoughts(!thoughts)}><Text style={thoughts?styles.textSelected:styles.tagText}>Thoughts?</Text></Pressable>
                  <Pressable style={sixth ? styles.tagSelected : styles.tag} onPress={() => setSixth(!sixth)}><Text style={sixth?styles.textSelected:styles.tagText}>Sixth_Form</Text></Pressable>
              </View>
            </View>
          )}
      </View>
  )
}

export default CreateRoom;