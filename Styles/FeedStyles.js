import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },


    header:{
        width: '100%',
        // backgroundColor: '#212529',
        height: 120,
        justifyContent: 'center',
        zIndex: 2,
    },

    list:{
        // backgroundColor: '#212529',
        // backgroundColor: 'orange',
        width: '100%',
    },

    gap:{
        height: 7,
        width: '100%',
        backgroundColor: '#111213ff'
    },

    

    filterIcon:{
        height: 20,
        width: 20,
        marginRight: 15,
        tintColor: '#0096ff',
    },

    filterSmallIcon:{
        height: 25,
        width: 25,
        marginRight: 20,
        tintColor: '#0096ff',
    },

    filterText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        opacity: 0.8,
        marginRight: 15
    },

    filterOptionText:{
        fontSize: 18,
        color: 'white'
    },

    downIcon:{
        tintColor: 'white',
        height: 12,
        width: 12,
        
    },

    toggle:{
        width: 120,
        height: 70,
        // backgroundColor: 'pink',
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },

    modalView:{
        flex: 1,
        marginTop: 'auto'
    },

    date: {
        fontSize: 15,
    },

    appTitle:{
        color: 'white',
        fontSize: 17,
        opacity: 0.8,
        marginLeft: 20,
        marginBottom: 10,
    },

    appFeedT:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
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

    sortTxt:{
        marginTop: 16,
        fontSize: 16,
        color: 'white',
        height: 35,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255, 0.5)',
        width: '90%'
    },

    
    optionContainer:{
        marginTop:15,
        // backgroundColor: 'pink',
        width: '100%',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%'
    },

    modalContainer:{
        height: '40%',
        backgroundColor: '#303030',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    username:{
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 15,
        fontWeight: 'bold'
    },

    filter:{
        // backgroundColor: 'orange',
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
        height: 60,
        width: '100%',
        // marginBottom: 10
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
        paddingTop: 20,
        paddingBottom: 5
    },

    block:{
        height: 25,
        marginRight: 20,
        width: 90,
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