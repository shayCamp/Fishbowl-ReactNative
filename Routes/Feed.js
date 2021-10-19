import React, {useState, useEffect, useContext, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable, StatusBar, ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import { UserContext } from "../Context/CurrentUser";
import * as Haptics from 'expo-haptics';


// import { useNavigation } from '@react-navigation/native';






const Feed = ({route,navigation}) => {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const info = useContext(UserContext)
  let current_date = new Date()
  let current_year = current_date.getFullYear()
  let current_month = current_date.getMonth()
  let current_day = current_date.getDate()
  let current_hour = current_date.getHours()
  let current_namedDay = current_date.getDay()
  let days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];



  // const navigation = useNavigation();
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api
  const [refreshing, setRefreshing] = useState(false);
  const [following, setFollowing] = useState([]) //Array of the users the current user is following
  const [users,setUsers] = useState([])
  const [mostRecent, setMostRecent] = useState(true)
  const [answered, setAnswered] = useState(false)
  const [mostPopular, setMostPopular] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [roomModalVisible, setRoomModalVisible] = useState(false)
const [longPressedRoom, setLongPressedRoom] = useState([])
  const [token,setToken] = useState()
  const isFocused = useIsFocused();


  useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;


    if(isFocused && isMounted){
      
            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/chat/get`,
              headers: { "x-auth-token": `${info.token}` }
            }).then((res) => {
                  setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
            }).catch((error) => {
              console.log('error: ', error);
  
          })

            axios({
              method: "GET", //Getting the users the current user follows
              url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.id}`,
              headers: { "x-auth-token": `${info.token}` }
            }).then((response) => {
                    setFollowing(response.data[0].following)
            }).catch((error) => {
                console.log('error: ', error);
    
            })

            axios({ //Getting all users on the site
              method: "GET",
              url: `https://fishbowl-heroku.herokuapp.com/users/get`,
              headers: { "x-auth-token": `${info.token}` }
            }).then((response) => {
                setUsers(response.data.reverse()) //Setting state with current info
            }).catch((error) => {
                console.log('error: ', error);
    
            })

    }
      
    return () => { isMounted = false };
  },[isFocused])



  const footer = () =>{
    return(
      <View style={styles.footer}>
        <Text style={styles.noRooms}>Follow More People For More Content</Text>
      </View>
    )
  }

  const onRefresh = () =>{
    setRefreshing(true);
    axios({
      method: 'GET',
      url: `https://fishbowl-heroku.herokuapp.com/chat/get`,
      headers: { "x-auth-token": `${info.token}` }
    }).then((res) => {
          setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
    })

    axios({
      method: "GET", //Getting the users the current user follows
      url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.id}`,
      headers: { "x-auth-token": `${info.token}` }
    }).then((response) => {
            setFollowing(response.data[0].following)
    }).catch((error) => {
        console.log('error: ', error);

    })

    axios({ //Getting all users on the site
      method: "GET",
      url: `https://fishbowl-heroku.herokuapp.com/users/get`,
      headers: { "x-auth-token": `${info.token}` }
    }).then((response) => {
        setUsers(response.data.reverse()) //Setting state with current info
        setRefreshing(false)
    }).catch((error) => {
        console.log('error: ', error);
    })
  }


  const header=()=>{
    return(
      <View style={styles.filter}>
        <TouchableOpacity onPress={()=>setModalVisible(true)}>
          <View style={styles.toggle}>
            <Image style={styles.filterIcon} source={mostRecent? require('../SVG/clock.png'): answered? require('../SVG/checked.png'): mostPopular? require('../SVG/up-trend.png'):null}/>
            <Text style={styles.filterText}>{mostRecent? `Recent`: answered? `Answered` : mostPopular? `Popular`: null}</Text>
            <Image style={styles.downIcon} source={require('../SVG/down-arrow.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      
    )
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181818" />
      <View style={styles.header}>
        <Text style={styles.appTitle}>{days[current_namedDay]}, {months[current_month]} {current_day}{current_day === 1 || current_day > 20 && current_day.toString()[1] === '1'? `st`: current_day===2 || current_day > 20 && current_day.toString()[1] === '2'? `nd`: current_day === 3 || current_day.toString()[1] === '3'? `rd`: current_day >3 || current_day.toString()[1] === '3'? `th`:null}</Text>
        <Text style={styles.appFeedT}>Daily Feed</Text>
      </View>
      <View style={styles.list}>
      <FlatList
      ref={ref}
        data={
            allRooms.slice().sort(function(a,b){
              if(mostPopular){
                return b.Messages.length - a.Messages.length
              }
            }).
            filter(answered?(room)=> following.includes(room.CreatedByName) && room.Answered || room.CreatedByName === info.name && room.Answered: (room)=> following.includes(room.CreatedByName) || room.CreatedByName === info.name)
        }
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        keyExtractor={(item, index) => {
          return  index.toString();
         }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            progressViewOffset={-5}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item})=> (
          <Pressable style={styles.room} onPress={()=> navigation.navigate('ChatRoom', {roomId: item._id})}>
            <View style={styles.top}>
              <View style={styles.left}>
                <Image style={styles.image} source={{uri: item.CreatedByImage}}/>
                <Text style={styles.username}>{item.CreatedByName}</Text>
              </View>
              <View style={styles.right}>
                <Text style={styles.Title}>{item.Title.split(' ').slice(0,3).join(' ')}<Text style={styles.date}> {`· ${current_year === item.Date.year ? current_month === item.Date.month ? current_day === item.Date.day ? current_hour === item.Date.hour ? `<1h` : current_hour - item.Date.hour + `h` : current_day - item.Date.day + `d` : `${item.Date.day} ${months[item.Date.month].substring(0,3)}`: current_year - item.Date.year + `y`}`}</Text></Text>
                {item.Tags.length !== 0?(
                  <Text style={styles.Tag}>{item.Tags.length!==0? item.Tags.map((tag)=> (tag + ` · ` )):null}</Text>
                ):null}
                <Text style={styles.Question}>{item.Question}</Text>
              </View>
            </View>
            {/* {item.Tags.length !== 0?(
              <View style={styles.tagsHolder}>
                {item.Tags.map((tag, i)=>(
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            ): null} */}
            {item.Answered?(
              <View style={styles.answeredHolder}>
                <View style={styles.block}>
                  <Text style={styles.answeredText}>Answered</Text>
                </View>
              </View>
            ):null}
          </Pressable>
        )}
      />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity 
            style={styles.modalView} 
            activeOpacity={1} 
            onPress={()=>setModalVisible(!modalVisible)}
          >
            <TouchableWithoutFeedback>
                <View style={styles.modalContainer}>
                  <View style={styles.bar}>
                    <View style={styles.actualBar}/>
                  </View>
                  <Text style={styles.sortTxt}>Sort Posts By</Text>
                  <TouchableOpacity style={styles.optionContainer} onPress={()=>{
                    setMostRecent(true)
                    setMostPopular(false)
                    setAnswered(false)
                    setModalVisible(!modalVisible)
                  }}>
                    <Image style={styles.filterSmallIcon} source={require('../SVG/clock.png')}/>
                    <Text style={styles.filterOptionText}>Most Recent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionContainer} onPress={()=>{
                    setMostRecent(false)
                    setMostPopular(true)
                    setAnswered(false)
                    setModalVisible(!modalVisible)
                  }}>
                    <Image style={styles.filterSmallIcon} source={require('../SVG/up-trend.png')}/>
                    <Text style={styles.filterOptionText}>Most Popular</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.optionContainer} onPress={()=>{
                    setMostRecent(false)
                    setMostPopular(false)
                    setAnswered(true)
                    setModalVisible(!modalVisible)
                  }}>
                    <Image style={styles.filterSmallIcon} source={require('../SVG/checked.png')}/>
                    <Text style={styles.filterOptionText}>Answered</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
          </TouchableOpacity>  
      </Modal>
    </View>
  )
}

export default Feed;