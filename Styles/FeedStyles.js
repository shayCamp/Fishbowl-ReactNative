import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },

    header:{
        width: '100%',
        backgroundColor: '#212529',
        height: 80,
        justifyContent: 'center',
        zIndex: 2
    },

    list:{
        backgroundColor: '#212529',
        width: '100%',
        marginTop: 10,
        paddingBottom: 100
    },

    toggle:{
        height: 60,
        width: 300,
        // backgroundColor: 'pink'
    },

    date: {
        fontSize: 15,
    },

    appTitle:{
        color: 'white',
        fontSize: 22,
        marginLeft: 20
    },


    Title: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 18,
        // marginLeft: 25,
        marginBottom: 4
    },

    Question: {
        color: 'white',
        fontSize: 22,
        // marginLeft: 25,
        maxWidth: '85%'
    },

    userInfo:{
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
        // borderBottomWidth: 1,
        // borderColor: 'rgba(255,255,255, 0.2)'
    },

    username:{
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 15,
        fontWeight: 'bold'
    },

    filter:{
        height: 60,
        // backgroundColor: 'orange'
    },


    image:{
        height: 90,
        width: 90,
        borderRadius: 14,
    },


    roomInfo:{
        paddingBottom: 25,
        paddingTop: 15,
        width: '100%',
        // backgroundColor: 'teal',
    },

    room:{
        width: '90%',
        paddingTop: 20, 
        marginLeft: 'auto',
        marginRight: 'auto',

    },

    top:{
        // backgroundColor: 'red',
        flexDirection: 'row'
    },

    left: {
        minHeight: 90,
        width: '30%',
        // backgroundColor: 'aqua',
    },

    right:{
        minHeight: 90,
        width: '70%',
        // backgroundColor: 'pink'
    },

    border:{
        fontSize: 16,
        color: 'rgba(255,255,255, 0.15)'
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
        // marginLeft: 15,
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