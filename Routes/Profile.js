import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/LoginStyles'




const Profile = () => {
  return(
      <View style={styles.container}>
          <Text style={styles.text}>Profile Page</Text>
      </View>
  )
}

export default Profile;