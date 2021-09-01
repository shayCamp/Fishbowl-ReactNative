import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image} from 'react-native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';






const Feed = () => {
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api
  console.log('allRooms: ', allRooms);
  const [token, setToken] = useState() //Stores all current rooms from api


  useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;
    if(isMounted){
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
                if(isMounted){
                  setAllRooms(res.data.reverse()) //Reversing order of rooms before we set variable, so that newest is at the top
                }
            })
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



  return(
    <View style={styles.container}>
      <FlatList
        data={allRooms}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        renderItem={({item})=> (
          <View style={styles.room}>
            <View style={styles.userInfo}>
              <Image style={styles.image} source={{uri: item.CreatedByImage}}/>
              <Text style={styles.username}>{item.CreatedByName}</Text>
            </View>
            <View style={styles.roomInfo}>
              <Text style={styles.Title}>{item.Title}</Text>
              <Text style={styles.Question}>{item.Question}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Feed;