import { StatusBar } from 'expo-status-bar';
import React, {useState,  useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/LoginStyles'
import { UserContext } from "../Context/CurrentUser";





const Profile = () => {
  const info = useContext(UserContext)

  return(
      <View style={styles.container}>
          <Text style={styles.text}>{`Logged in as ${info.name}`}</Text>
      </View>
  )
}

export default Profile;