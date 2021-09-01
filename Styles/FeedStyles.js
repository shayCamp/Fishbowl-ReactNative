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
        height: 60,
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

    tagHolder:{

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

    tagHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20
    },

    tag:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 110,
        marginLeft: 15,
        borderRadius: 15,
        backgroundColor: '#384357',
    },

    answeredHolder:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },

    block:{
        height: 30,
        marginRight: 20,
        width: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0096ff'
    },

    text:{
        color: 'white',
        fontSize: 22
    },
    answeredText:{
        color: 'white',
        fontSize: 16
    },

    tagName:{
        color: 'white',
        fontSize: 15
    }
})