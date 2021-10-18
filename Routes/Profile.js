import { StatusBar } from 'expo-status-bar';
import React, {useState,  useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList,  RefreshControl} from 'react-native';
import styles from '../Styles/ProfileStyles'
import { UserContext } from "../Context/CurrentUser";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';







const Profile = ({route, navigation}) => {
  // console.log('route: ', route.params);
  const info = useContext(UserContext)
  const isFocused = useIsFocused();
  const [currentUser, setCurrentUser] = useState('')
  const [loading,setLoading] = useState(false)
  const [usersRooms, setUsersRooms] = useState([])
  const [token,setToken] = useState()
  const [refreshing, setRefreshing] = useState(false);
  const [myPage, setMyPage] = useState('')

  useEffect(()=>{
    if(route.params !== undefined){
      setMyPage(route.params.profile === info.id)
    }
  },[route])

  

  /**
     * ==========
     * Get token
     * ==========
     */
   useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;
    setLoading(true)

    if(isFocused && isMounted && route.params !== undefined){
        axios({
          method: 'GET',
          url: `https://fishbowl-heroku.herokuapp.com/users/get/${route.params.profile}`,
          headers: { "x-auth-token": `${info.token}` }
        }).then((res) => {
            setCurrentUser(res.data[0])
        }).catch((err)=>{
          console.log(err)
        })

        axios({
          method: 'GET',
          url: `https://fishbowl-heroku.herokuapp.com/chat/get/specificUserRoom/${route.params.profile}`,
          headers: { "x-auth-token": `${info.token}` }
        }).then((res) => {
            setUsersRooms(res.data.reverse())
        }).catch((err)=>{
            console.log(err)
        })
    }

    setLoading(false)
    return () => { isMounted = false };
  },[isFocused])
/**
 * ==========
 * Get token
 * ==========
 */

 const onRefresh = () =>{
  setRefreshing(true);
  axios({
    method: 'GET',
    url: `https://fishbowl-heroku.herokuapp.com/chat/get/specificUserRoom/${route.params.profile}`,
    headers: { "x-auth-token": `${info.token}` }
  }).then((res) => {
      setUsersRooms(res.data.reverse())
      setRefreshing(false)
  }).catch((err)=>{
      console.log(err)
  })
}

 const header = () =>{
   return(
     <>
    {myPage?(
      <View style={styles.edit}>
      <Pressable>
        {/* <Image style={styles.settingsIcon} source={require('../SVG/settings.png')}/> */}
      </Pressable>
    </View>
    ): null}
     
     <View style={styles.profileImage}>
       <Image style={styles.image} source={{uri: currentUser.image}}/>
       <Text style={styles.username}>{currentUser.username}</Text>
       <Text style={styles.email}>{currentUser.email}</Text>
     </View>
     {usersRooms.length ===0?(
       <View style={styles.noRoomContainer}>
       <Pressable onPress={()=> navigation.navigate('Create Room')}>
         <View style={styles.noRoomHolder}>
           <Text style={styles.createRoomText}>{myPage? `You Have No Rooms - Create Some` : `User Has No Rooms`}</Text>
         </View>
       </Pressable>
     </View>
     ):null}
  </>

   )
 }
  

    return(
      <View style={styles.container}>
        {loading?(
          <Text>Loading</Text>
        ):(
          <>

              <FlatList
              data={usersRooms}
              ListHeaderComponent={header}
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
                <Pressable style={styles.room} onPress={()=> navigation.navigate('ChatRoom', {roomId: item._id})}>
                  <View style={styles.userInfo}>
                    <Image style={styles.userImage} source={{uri: item.CreatedByImage}}/>
                    <Text style={styles.userUsername}>{item.CreatedByName}</Text>
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
            
          </>
        )}
        
      </View>
    )
}

export default Profile;