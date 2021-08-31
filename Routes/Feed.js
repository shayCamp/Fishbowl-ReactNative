import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import styles from '../Styles/FeedStyles'
import axios from 'axios';





const Feed = () => {
  const [allRooms, setAllRooms] = useState([]) //Stores all current rooms from api


  useEffect(()=>{ //On page load grab all the rooms
    let isMounted = true;

    
    return () => { isMounted = false };
  },[])


  return(
      <FlatList
        data={allRooms}
        // ListHeaderComponent={this.renderListHeader}
        renderItem={({item})=> (
          <Text>Room</Text>
        )}
      />
  )
}

export default Feed;