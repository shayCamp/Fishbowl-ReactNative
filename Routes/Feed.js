import React, {useState, useEffect, useContext, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable, StatusBar, ScrollView} from 'react-native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { UserContext } from "../Context/CurrentUser";


// import { useNavigation } from '@react-navigation/native';






const Feed = ({route,navigation}) => {
  const info = useContext(UserContext)


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
            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/chat/get`,
              headers: { "x-auth-token": `${token}` }
            }).then((res) => {
                  setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
            })

            axios({
              method: "GET", //Getting the users the current user follows
              url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.name}`,
              headers: { "x-auth-token": `${token}` }
            }).then((response) => {
              setFollowing(response.data[0].following);
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

  const header = () =>{
    return(
      <View style={styles.header}>
        <ScrollView contentContainerStyle={styles.friendsBar} ref={(ref)=>{
          setRef(ref)
        }}>
          {users.length !== 0?users.filter((user)=> following.includes(user.username)).map((user)=>(
            <Pressable style={styles.friendProfileHolder}>
              <Image style={styles.profileImage} source={{uri: user.image}}/>
              <Text style={styles.profileText}>{user.username.substring(0,10)}</Text>
            </Pressable>
          )): null}
        </ScrollView>
        <View style={styles.filter}></View>
      </View>
    )
  }

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

  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#111213ff" />
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
            // progressViewOffset={150
            // }
            onRefresh={onRefresh}
          />
        }
        renderItem={({item})=> (
          <Pressable style={styles.room} onPress={()=> navigation.navigate('ChatRoom', {roomID: item._id})}>
            <View style={styles.userInfo}>
              <Image style={styles.image} source={{uri: item.CreatedByImage}}/>
              <Text style={styles.username}>{item.CreatedByName}</Text>
            </View>
            <View style={styles.roomInfo}>
              <Text style={styles.Title}>{item.Title}</Text>
              <Text style={styles.Question}>{item.Question}</Text>
            </View>
            {item.Tags.length !== 0?(
              <View style={styles.tagHolder}>
                {item.Tags.slice(0,3).map((tag, i)=>(
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagName}>{tag}</Text>
                  </View>
                ))}
              </View>
            ):null}
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
  )
}

export default Feed;