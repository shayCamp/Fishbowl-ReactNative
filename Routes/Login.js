import React, {useState} from 'react';
import styles from '../Styles/LoginStyles'
import { ActivityIndicator, Pressable, StyleSheet,StatusBar, Text, View, TextInput, Image} from 'react-native';
import Black from '../SVG/black.svg'
import * as Google from 'expo-google-app-auth'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const Login = ({loginToParent}) => {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [token, setToken] = useState('')
  const [result,setResult] = useState()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState("")
  const [image, setImage] = useState("")
  const [login, setLogin] = useState(true)
  const [createUser, setCreateUser] = useState(false)
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const [AccountAlreadyExists, setAccountAlreadyExists] = useState()
  const[usernameTaken, setUsernameTaken] = useState(false)




  const handleGoogleSignin = () =>{
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `939358098643-0dl6npufal6oarnupl0ugjakeftrk205.apps.googleusercontent.com`,
      androidClientId: `939358098643-d75dllgksvgu2bvlovnij8tk6e9e0emj.apps.googleusercontent.com`,
      androidStandaloneAppClientId: `939358098643-d75dllgksvgu2bvlovnij8tk6e9e0emj.apps.googleusercontent.com`,
      scopes: ['profile','email']
    }

    Google.logInAsync(config)
      .then((result) => {
        setLoading(false)
        setEmail(result.user.email)
        setImage(result.user.photoUrl)
        setToken(result.idToken)
        setResult(result)

        axios({
          method: "GET",
          url: "https://fishbowl-heroku.herokuapp.com/users/get",
          headers: { "x-auth-token": `${result.idToken}`},
        }).then((response)=>{
          if(response.data.length !== 0){
              if(response.data.filter((user)=> user.email === result.user.email).length > 0){
                  response.data.map((user)=>{
                      if(user.email === result.user.email){
                          logExistingUserIn([result, user.username, user._id])
                      }
                  })
              }else{
                setCreateUser(true)
              }
          }  else{
            createUser(true)
          } 
       })
      })
      .catch((error) => {
        setGoogleSubmitting(false);
      });
  }

  const createUserFunc = () =>{
      if(username.replace(/\s/g, '').length > 0){
        axios({
            method: "POST",
            url: "https://fishbowl-heroku.herokuapp.com/users/new",
            headers: { "x-auth-token": `${token}` },
            data: {username: username.replace(/\s/g, '') ,email: email , status, image:image }
        }).then((response)=>{
            if(response.data.msg === "user already exists"){
                setUsernameTaken(true)
                setUserName('')
            }else{
              axios({
                method: "GET",
                url: "https://fishbowl-heroku.herokuapp.com/users/get",
                headers: { "x-auth-token": `${token}`},
              }).then((response)=>{
                if(response.data.length !== 0){
                  response.data.map((user)=>{
                        if(user.email === email){
                            logExistingUserIn([result, user.username, user._id])
                        }
                    })
                }
              })
            }
        }).catch((error)=>{
            console.log('error 2: ', error);
        })
    }
  }

  const logExistingUserIn = (prop) =>{
    loginToParent(prop)
  }









  

  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      {createUser?(
        <ScrollView style={styles.createUser} keyboardShouldPersistTaps='always'>
          <View style={styles.nav}>
            <Pressable onPress={()=> {setLogin(true); setCreateUser(false);}}>
            <Image
              source={require('../SVG/left-arrow.png')}
              resizeMode='contain'
              style={styles.back}
              />
              </Pressable>
          </View>
          <View style={styles.svg2}>
              <Text style={styles.Large}>Let's Sign You Up.</Text>
              <Text style={styles.Small}>Welcome, Choose a name.</Text>
          </View>
          <View style={styles.desc2}>
            <TextInput placeholder={usernameTaken?`Username Already Exists`:`Choose Your Username`} placeholderTextColor="rgba(255,255,255,0.5)" value={username} onChangeText={(t)=>setUserName(t)} selectionColor="white" style={styles.input}></TextInput>
            <Pressable style={styles.submit} onPress={()=> createUserFunc()}>
              <Text style={username.length > 0 ? styles.SmallActive : styles.Small}>Submit</Text>
            </Pressable>
          </View>
        </ScrollView>
      ):(
        <>
        <View style={styles.svg}>
            <Black width={wp('80%')}/>
        </View>
        <View style={styles.desc}>
          <Text style={styles.Large}>Fishbowl Forum</Text>
          <Text style={styles.Small}>Create & Join Chat Rooms 💬🌎 We are making this the easiest way to recieve informed and live responses to any of your questions 📚</Text>
        </View>
        {login?(
        <View style={styles.loginHolder}>
          <Pressable style={styles.SigninInactive} onPress={()=> {setLogin(false); setCreateUser(true);}}>
            {/* <Text style={styles.SmallT}>Don't have an account? Register</Text> */}
          </Pressable>
        </View>
        ):null}
        <View style={styles.loginWithG}>
            <Pressable style={styles.submit} onPress={()=> {handleGoogleSignin(); setLoading(true)}}>
              {loading?(
                <ActivityIndicator size="large" color="#ffffff"/>
              ):(
                <Text style={styles.SmallActive}>Login With Google</Text>
              )}
            </Pressable>
        </View>
        </>
      )}
      
        
    </View>
  );
}

export default Login;

