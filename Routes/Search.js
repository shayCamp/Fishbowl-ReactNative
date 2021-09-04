import { StatusBar, useContext } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from '../Styles/LoginStyles'
import axios from 'axios';




const Search = () => {
  

  return(
      <View style={styles.container}>
          <Text style={styles.text}>Search Page</Text>
      </View>
  )
}

export default Search;