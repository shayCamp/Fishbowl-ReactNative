import { StatusBar } from 'expo-status-bar';
import React, {useState,  useContext, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable, FlatList,  RefreshControl} from 'react-native';
import styles from '../Styles/UsersPageStyles'
import { UserContext } from "../Context/CurrentUser";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';







const UsersPage = ({route, navigation}) => {


 const onRefresh = () =>{
  setRefreshing(true);
  axios({
    method: 'GET',
    url: `https://fishbowl-heroku.herokuapp.com/chat/get/specificUserRoom/${userID}`,
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
    <View style={styles.noRoomContainer}>
    <Pressable onPress={()=> navigation.navigate('Create Room')}>
      <View style={styles.noRoomHolder}>
        <Text style={styles.createRoomText}>User Has No Rooms - Create Some</Text>
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

export default UsersPage;