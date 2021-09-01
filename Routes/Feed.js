import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable} from 'react-native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from '@react-navigation/native';






const Feed = ({navigation}) => {
  // const navigation = useNavigation();
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api
  const [token, setToken] = useState() //Stores all current rooms from api
  const [refreshing, setRefreshing] = useState(false);


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
      <FlatList
        data={allRooms}
        ListHeaderComponent={header}
        ListFooterComponent={footer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        renderItem={({item})=> (
          <Pressable style={styles.room} onPress={()=> navigation.navigate('ChatRoom', {room: item})}>
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
                {item.Tags.slice(0,3).map((tag)=>(
                  <View style={styles.tag}>
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