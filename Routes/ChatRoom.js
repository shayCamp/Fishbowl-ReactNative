import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import styles from '../Styles/ChatRoomStyles'




const ChatRoom = ({route}) =>{
    const {room} = route.params
    return(
        <View style={styles.container}>
            <Text>{room.CreatedByName}</Text>
        </View>
    )
}

export default ChatRoom;