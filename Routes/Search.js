import React, {useState, useEffect, useContext, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Pressable, StatusBar, ScrollView, Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styles from '../Styles/SearchStyles'
import feedStyles from '../Styles/FeedStyles'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import { UserContext } from "../Context/CurrentUser";
import { TextInput } from 'react-native-gesture-handler';




const Search = ({navigation}) => {

  const info = useContext(UserContext)
  const [token,setToken] = useState()
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api
  console.log('allRooms: ', allRooms);
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const [following, setFollowing] = useState([]) //Array of the users the current user is following
  const [users,setUsers] = useState([])
  console.log('users: ', users.length);
  const [searchFilter, setSearchFilter] = useState('')
  let current_date = new Date()
  let current_year = current_date.getFullYear()
  let current_month = current_date.getMonth()
  let current_day = current_date.getDate()
  let current_hour = current_date.getHours()
  let current_namedDay = current_date.getDay()
  let days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];




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

  // const header = () =>{
  //   return (
      
  //   )
  // }

  const footer = () =>{
    return(
      <View style={feedStyles.footer}>
        <Text style={feedStyles.noRooms}>No Rooms Match</Text>
      </View>
    )
  }

  const footerUser = () =>{
    return(
      <View style={feedStyles.footer}>
        <Text style={feedStyles.noRooms}>No Users Match</Text>
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

  const header = () =>{
    if(searchFilter.length > 0){
      return(
        <FlatList
      data={users.filter((users)=> users.username.toUpperCase().includes(searchFilter.toUpperCase()))}
      keyExtractor={(item, index) => {
        return  index.toString();
       }}
       ListFooterComponent={users.filter((users)=> users.username.toUpperCase().includes(searchFilter.toUpperCase())).length === 0? footerUser: null}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          progressViewOffset={-10}
          onRefresh={onRefresh}
        />
      }
      renderItem={({item})=> (
        <Pressable style={styles.userHolder}>
          <Text>{item.username}</Text>
        </Pressable>
      )}
    />
      )
    }else{
      return(
        null
      )
    }
    
      

    
  }
  return(
      <View style={styles.container}>
        <View style={styles.header}>
        <View style={styles.searchHolder}>
          <Image style={styles.searchIcon} source={require('../SVG/search.png')}/>
          <TextInput selectionColor={'white'} style={styles.input} placeholder="Search For Rooms Or Users" placeholderTextColor="rgba(255,255,255, 0.5)" onChangeText={search => setSearchFilter(search)}></TextInput>
        </View>
      </View>
          <FlatList
        data={
          allRooms.filter((room)=> {
          return(
            room.Title.toUpperCase().includes(searchFilter.toUpperCase()) ||
            room.Question.toUpperCase().includes(searchFilter.toUpperCase())
          )
        })}
        ListHeaderComponent={header}
        ListFooterComponent={allRooms.filter((room)=> {
          return(
            room.Title.toUpperCase().includes(searchFilter.toUpperCase()) ||
            room.Question.toUpperCase().includes(searchFilter.toUpperCase())
          )
        }).length === 0? footer: null}
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
          <Pressable style={feedStyles.room} onPress={()=> navigation.navigate('ChatRoom', {roomId: item._id})}>
            <View style={feedStyles.top}>
              <View style={feedStyles.left}>
                <Image style={feedStyles.image} source={{uri: item.CreatedByImage}}/>
              </View>
              <View style={feedStyles.right}>
                <Text style={feedStyles.Title}>{item.Title.split(' ').slice(0,3).join(' ')}<Text style={feedStyles.date}> {`· ${current_year === item.Date.year ? current_month === item.Date.month ? current_day === item.Date.day ? current_hour === item.Date.hour ? `<1h` : current_hour - item.Date.hour + `h` : current_day - item.Date.day + `d` : current_month - item.Date.month + `m` : current_year - item.Date.year + `y`}`}</Text></Text>
                <Text style={feedStyles.username}>/{item.CreatedByName}</Text>
                <Text style={feedStyles.Question}>{item.Question}</Text>
              </View>
            </View>
            {item.Answered?(
              <View style={feedStyles.answeredHolder}>
                <View style={feedStyles.block}>
                  <Text style={feedStyles.answeredText}>Answered</Text>
                </View>
              </View>
            ):null}
            <Text style={feedStyles.border}ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - -
            </Text>
          </Pressable>
        )}
      />
      </View>
  )
}

export default Search;