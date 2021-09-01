import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#121212'
    },

    header:{
        height: 190,
        width: '100%',
    },


    friendsBar:{
        height: 150,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255, 0.4)'
    },

    filter:{
        height: 40,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255, 0.4)'
    },

    Title: {
        color: 'white',
        fontSize: 20,
        marginLeft: 25,
        marginBottom: 15
    },

    Question: {
        color: 'white',
        fontSize: 18,
        marginLeft: 25,
        maxWidth: '85%'
    },

    userInfo:{
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    username:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    image:{
        height: 35,
        width: 35,
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15
    },

    roomInfo:{
        paddingBottom: 25,
        paddingTop: 15,
        width: '100%',
        // backgroundColor: 'teal',
    },

    room:{
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255, 0.4)'
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: '100%',
    },

    noRooms: {
        fontSize: 18,
        color: 'white'
    },

    text:{
        color: 'white',
        fontSize: 22
    }
})