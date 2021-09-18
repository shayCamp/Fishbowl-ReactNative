import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable, StatusBar} from 'react-native';
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
  const [token, setToken] = useState() //Stores all current rooms from api
  const [refreshing, setRefreshing] = useState(false);
  const [following, setFollowing] = useState([]) //Array of the users the current user is following
  const isFocused = useIsFocused();


  useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;

    if(isFocused && isMounted){
      const getData = async () => {
        try {
          const token = await AsyncStorage.getItem('session-key')
          if(token !== null) {
            setToken(token)
            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/chat/get`,
              headers: { "x-auth-token": `${token}` }
            }).then((res) => {
                  setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
            })
          //   axios({
          //     method: "GET", //Getting the users the current user follows
          //     url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.name}`,
          //     headers: { "x-auth-token": `${token}` }
          // }).then((response) => {
          //         // setFollowing(response.data.following)
          // }).catch((error) => {
          //     console.log('error: ', error);
  
          // })
          }
        } catch(e) {
          // error reading value
        }
      }
      getData()
    }
      
    return () => { isMounted = false };
  },[])

  const header = () =>{
    return(
      <View style={styles.header}>
        <View style={styles.friendsBar}></View>
        <View style={styles.filter}></View>
      </View>
    )
  }

  const footer = () =>{
    return(
      <View style={styles.footer}>
        <Text style={styles.noRooms}>No More Rooms</Text>
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
        data={allRooms}
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