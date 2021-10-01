import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import styles from '../Styles/LoginStyles'
import { ActivityIndicator, Pressable, StyleSheet, Text, View, TextInput, Image} from 'react-native';
import Black from '../SVG/black.svg'
import * as Google from 'expo-google-app-auth'
import axios from 'axios';



const Login = ({loginToParent}) => {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);
  const [token, setToken] = useState('')
  const [result,setResult] = useState()
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState("")
  const [createUser, setCreateUser] = useState(false)
  const [status, setStatus] = useState("")
  const[usernameTaken, setUsernameTaken] = useState(false)




  const handleGoogleSignin = () =>{
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `939358098643-0dl6npufal6oarnupl0ugjakeftrk205.apps.googleusercontent.com`,
      androidClientId: `939358098643-d75dllgksvgu2bvlovnij8tk6e9e0emj.apps.googleusercontent.com`,
      scopes: ['profile','email']
    }

    Google.logInAsync(config)
      .then((result) => {
        setCreateUser(false)
        setToken(result.idToken)
        setEmail(result.email)
        checkUsername(result)
      })
      .catch((error) => {
        console.log(error);
        setGoogleSubmitting(false);
      });
  }

  const checkUsername = (result) =>{
    setResult(result)
    let passedToken = result.idToken

    axios({
      method: "GET",
      url: "https://fishbowl-heroku.herokuapp.com/users/get",
      headers: { "x-auth-token": `${passedToken}`},
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
      }else{
          setCreateUser(true)
      }
          
  })
  }

  const logExistingUserIn = (prop) =>{
    loginToParent(prop)
  }

  const logNewUser = () =>{
    setUserName('')
    if(username.length > 0){
      axios({
          method: "POST",
          url: "https://fishbowl-heroku.herokuapp.com/users/new",
          headers: { "x-auth-token": `${token}` },
          data: {username: username ,email: result.user.email , status, image: result.user.photoUrl}
      }).then((response)=>{
          if(response.data.msg === "user already exists"){
              setUsernameTaken(true)
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
              }else{
                  setCreateUser(true)
              }
                  
          })
              // loginToParent([result, username, ])
          }
      }).catch((error)=>{
          console.log('error: ', error);

      })
  }
  }








  

  

  return (
    <View style={styles.container}>
        <View style={styles.svg}>
            <Black width={335}/>
        </View>
        <View style={styles.desc}>
          <Text style={styles.Large}>{createUser?`Please Choose Username`:`Lorem ipsum dolor sit `}</Text>
          {createUser?(
            <Pressable onPress={handleGoogleSignin} style={styles.loginBtn}>
              <Text style={styles.text}>Choose Different Account</Text>
            </Pressable>
          ):<Text style={styles.Small}>Curabitur non sagittis lorem. Vivamus porttitor malesuada risus, hendrerit lacinia sem ullamcorper at. Duis nec imperdiet.</Text>}

        </View>
        <View style={styles.loginHolder}>
          {createUser? (
            <View style={styles.loginBtn}>
              <TextInput style={styles.input} selectionColor={'white'} placeholderTextColor="white" placeholder={usernameTaken?'Username Already Exists':'Choose Username'} onChangeText={name => setUserName(name)}/>
              {username.length > 0?(
                <Pressable onPress={logNewUser}>
                <Image
                source={require('../SVG/next.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: 'white'
                }}
                />
                </Pressable>
              ):null}
            </View>
          ):(
              <Pressable onPress={handleGoogleSignin} style={styles.loginBtn}>
                {googleSubmitting? <ActivityIndicator size="large" color="white"/> : <Text style={styles.text}>Login With Google</Text>}
              </Pressable>

          )}

        </View>
    </View>
  );
}

export default Login;

