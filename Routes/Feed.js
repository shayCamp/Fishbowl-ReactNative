import React, {useState, useEffect, useContext, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable, StatusBar, ScrollView, Modal} from 'react-native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { UserContext } from "../Context/CurrentUser";


// import { useNavigation } from '@react-navigation/native';






const Feed = ({route,navigation}) => {
  const info = useContext(UserContext)
  let current_date = new Date()
  let current_year = current_date.getFullYear()
  let current_month = current_date.getMonth()
  let current_day = current_date.getDate()
  let current_hour = current_date.getHours()



  // const navigation = useNavigation();
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api
  const [refreshing, setRefreshing] = useState(false);
  const [following, setFollowing] = useState([]) //Array of the users the current user is following
  const [users,setUsers] = useState([])
  const [token,setToken] = useState()
  const isFocused = useIsFocused();


  useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;

    if(isFocused && isMounted){
      const getData = async () => {
        try {
          const token = await AsyncStorage.getItem('session-key')
          setToken(token)
          if(token !== null) {
            console.log("token not null")
            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/chat/get`,
              headers: { "x-auth-token": `${token}` }
            }).then((res) => {
                  setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
            }).catch((error) => {
              console.log('error: ', error);
  
          })

            axios({
              method: "GET", //Getting the users the current user follows
              url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.id}`,
              headers: { "x-auth-token": `${token}` }
            }).then((response) => {
                    setFollowing(response.data[0].following)
            }).catch((error) => {
                console.log('error: ', error);
    
            })

            axios({ //Getting all users on the site
              method: "GET",
              url: `https://fishbowl-heroku.herokuapp.com/users/get`,
              headers: { "x-auth-token": `${token}` }
            }).then((response) => {
                setUsers(response.data.reverse()) //Setting state with current info
            }).catch((error) => {
                console.log('error: ', error);
    
            })


            
          }
        } catch(e) {
          // error reading value
        }
      }
      getData()
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
      headers: { "x-auth-token": `${token}` }
    }).then((res) => {
          setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
          setRefreshing(false)
    })
  }

  const header=()=>{
    return(
      <View style={styles.filter}>
          <View style={styles.toggle} >
          </View>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#212529" />
      <View style={styles.header}>
        <Text style={styles.appTitle}>Fishbowl</Text>
      </View>
      <View style={styles.list}>
      <FlatList
        data={allRooms.filter((room)=> following.includes(room.CreatedByName) || room.CreatedByName === info.name)}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        keyExtractor={(item, index) => {
          return  index.toString();
         }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            progressViewOffset={-10}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item})=> (
          <Pressable style={styles.room} onPress={()=> navigation.navigate('ChatRoom', {roomId: item._id})}>
            <View style={styles.top}>
              <View style={styles.left}>
                <Image style={styles.image} source={{uri: item.CreatedByImage}}/>
              </View>
              <View style={styles.right}>
                <Text style={styles.Title}>{item.Title.substring(0,25)}<Text style={styles.date}> {`· ${current_year === item.Date.year ? current_month === item.Date.month ? current_day === item.Date.day ? current_hour === item.Date.hour ? `<1h` : current_hour - item.Date.hour + `h` : current_day - item.Date.day + `d` : current_month - item.Date.month + `m` : current_year - item.Date.year + `y`}`}</Text></Text>
                <Text style={styles.username}>/{item.CreatedByName}</Text>
                <Text style={styles.Question}>{item.Question}</Text>
              </View>
            </View>
            {item.Answered?(
              <View style={styles.answeredHolder}>
                <View style={styles.block}>
                  <Text style={styles.answeredText}>Answered</Text>
                </View>
              </View>
            ):null}
            <Text style={styles.border}ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - -
            </Text>
          </Pressable>
        )}
      />
      </View>
    </View>
  )
}

export default Feed;