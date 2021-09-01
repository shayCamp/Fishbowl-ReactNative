import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Routes/Login.js'
import Feed from './Routes/Feed.js';
import Search from './Routes/Search.js';
import Profile from './Routes/Profile.js';
import CreateRoom from './Routes/CreateRoom.js';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [userInfo, setUserInfo] = useState()
  console.log('userInfo: ', userInfo);

  const loginToParent = (data) =>{
    setUserInfo(data)
  }

  useEffect(()=>{
    let isMounted = true;
    

    if(isMounted){
      const storeData = async () => {
        try {
          await AsyncStorage.setItem('session-key', userInfo.idToken)
        } catch (e) {
        }
      }
      storeData()
    }

    
    return () => { isMounted = false };
  },[userInfo])

  const LoginPage = props =>(
    <Login {...props} loginToParent={loginToParent}/>
  )
  
  if(userInfo !== undefined){ //f we dont have user info return login
    return(
      <NavigationContainer>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#121212" translucent = {true}/>
        <Tab.Navigator screenOptions={{
          "headerShown":false,
          "tabBarShowLabel": false,
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        }}>
          <Tab.Screen name="Feed" component={Feed} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/loupe.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Create Room" component={CreateRoom} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/plus.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                source={require('./SVG/user.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused? "#0096ff" : "#748c94"
                }}
                />
              </View>
            )
          }} />
          
        </Tab.Navigator>
    </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}

export default App;
