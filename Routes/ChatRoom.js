import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image, FlatList, TextInput, StatusBar, Pressable} from 'react-native';
import styles from '../Styles/ChatRoomStyles'



const ChatRoom = ({route, navigation}) =>{
    console.log(navigation)
    const [message, setMessage] = useState('')
    const {room} = route.params

    const header = () =>{
        return(
            <View style={styles.lower}>
                <Text style={styles.Qtext}>{room.Question}</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#212224ff" />
            <View style={styles.navHeader}>
                <View style={styles.goBack}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Image
                        source={require('../SVG/left-arrow.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white'
                        }}
                        />
                    </Pressable>
                </View>
                <View style={styles.imgntxt}>
                    <Image style={styles.image} source={{uri: room.CreatedByImage}}/>
                    <Text style={styles.text}>{room.Title}</Text>
                </View>
            </View>
            <FlatList
                ListHeaderComponent={header}
            />
            <View style={styles.chatBar}>
                <TextInput style={styles.input} selectionColor={'white'} placeholder={'Message'} placeholderTextColor="white" onChangeText={message => setMessage(message)}/>
                <Image
                source={require('../SVG/sendIcon.png')}
                resizeMode='contain'
                style={{
                    width: 25,
                    height: 25,
                    tintColor: 'white'
                }}
                />
            </View>
        </View>
    )
}

export default ChatRoom;