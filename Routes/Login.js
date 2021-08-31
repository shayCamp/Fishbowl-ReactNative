import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import styles from '../Styles/LoginStyles'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import Black from '../SVG/black'
import * as Google from 'expo-google-app-auth'


const Login = ({loginToParent}) => {
  const [googleSubmitting, setGoogleSubmitting] = useState(false);


  const handleGoogleSignin = () =>{
    setGoogleSubmitting(true);
    const config = {
      iosClientId: `939358098643-0dl6npufal6oarnupl0ugjakeftrk205.apps.googleusercontent.com`,
      androidClientId: `939358098643-d75dllgksvgu2bvlovnij8tk6e9e0emj.apps.googleusercontent.com`,
      scopes: ['profile','email']
    }

    Google.logInAsync(config)
      .then((result) => {
        console.log('result: ', result);
        loginToParent(result)
       
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setGoogleSubmitting(false);
      });
  }

  

  return (
    <View style={styles.container}>
        <View style={styles.svg}>
            <Black width={335}/>
        </View>
        <View style={styles.desc}>
          <Text style={styles.Large}>Lorem ipsum dolor sit </Text>
          <Text style={styles.Small}>Curabitur non sagittis lorem. Vivamus porttitor malesuada risus, hendrerit lacinia sem ullamcorper at. Duis nec imperdiet.</Text>

        </View>
        <View style={styles.loginHolder}>
          <Pressable onPress={handleGoogleSignin} style={styles.loginBtn}>
            {googleSubmitting? <ActivityIndicator size="large" color="white"/> : <Text style={styles.text}>Login With Google</Text>}
          </Pressable>
        </View>
    </View>
  );
}

export default Login;

