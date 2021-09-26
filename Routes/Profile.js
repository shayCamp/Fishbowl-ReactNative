import { StatusBar } from 'expo-status-bar';
import React, {useState,  useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList,  RefreshControl} from 'react-native';
import styles from '../Styles/ProfileStyles'
import { UserContext } from "../Context/CurrentUser";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';







const Profile = ({route, navigation}) => {
  const info = useContext(UserContext)
  console.log('info: ', info);
  const isFocused = useIsFocused();
  const [currentUser, setCurrentUser] = useState('')
  const [loading,setLoading] = useState(false)
  const [usersRooms, setUsersRooms] = useState([])
  const [token,setToken] = useState()

  console.log('usersRooms: ', usersRooms);
  const [refreshing, setRefreshing] = useState(false);

  

  /**
     * ==========
     * Get token
     * ==========
     */
   useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;
    // setLoading(true)

    if(isFocused && isMounted){

      const getToken = async () => {
        try {
          const token = await AsyncStorage.getItem('session-key')
          setToken(token)

          if(token !== null) {
            console.log("getting")
            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/users/get/${info.id}`,
              headers: { "x-auth-token": `${token}` }
            }).then((res) => {
                setCurrentUser(res.data[0])
            }).catch((err)=>{
              console.log(err)
            })

            axios({
              method: 'GET',
              url: `https://fishbowl-heroku.herokuapp.com/chat/get/specificUserRoom/${info.id}`,
              headers: { "x-auth-token": `${token}` }
            }).then((res) => {
              console.log('res: ', res);
                setUsersRooms(res.data.reverse())
            }).catch((err)=>{
                console.log(err)
            })

          }
        } catch(e) {
          // error reading value
        }
      }
      getToken()
    }

    // setLoading(false)



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
    url: `https://fishbowl-heroku.herokuapp.com/chat/get/specificUserRoom/${info.id}`,
    headers: { "x-auth-token": `${token}` }
  }).then((res) => {
    console.log('res: ', res);
      setUsersRooms(res.data.reverse())
      setRefreshing(false)
  }).catch((err)=>{
      console.log(err)
  })
}

 const header = () =>{
   return(
    <View style={styles.noRoomContainer}>
    <Pressable onPress={()=> navigation.navigate('Create Room')}>
      <View style={styles.noRoomHolder}>
        <Text style={styles.createRoomText}>You Have No Rooms - Create Some</Text>
      </View>
    </Pressable>
  </View>

   )
 }
  

    return(
      <View style={styles.container}>
        {loading?(
          <Text>Loading</Text>
        ):(
          <>
            <View style={styles.edit}>
              <Pressable>
                <Image style={styles.settingsIcon} source={require('../SVG/settings.png')}/>
              </Pressable>
            </View>
            <View style={styles.profileImage}>
              <Image style={styles.image} source={{uri: currentUser.image}}/>
              <Text style={styles.username}>{currentUser.username}</Text>
              <Text style={styles.email}>{currentUser.email}</Text>
            </View>
              <FlatList
              data={usersRooms}
              ListHeaderComponent={usersRooms.length === 0? header: null}
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