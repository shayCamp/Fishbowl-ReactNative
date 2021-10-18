import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },


    header:{
        width: '100%',
        backgroundColor: '#171717',
        height: hp('14%'),
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        marginBottom: 10,
        zIndex: 400
    },



    list:{
        // backgroundColor: '#212529',
        // backgroundColor: 'orange',
        width: '100%',
        marginBottom: 115,
    },

    tagsHolder:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 20,
        paddingBottom: 5
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
        fontSize: 17,
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
    modalDate: {
        fontSize: 14,
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

    modalTitle: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 16,
        // marginLeft: 25,
        marginBottom: 4
    },

    Question: {
        color: 'white',
        fontSize: 20,
        // marginLeft: 25,
        maxWidth: '85%',
    },

    modalQuestion: {
        color: 'white',
        fontSize: 20,
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
        backgroundColor: '#212121',
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

    modalUsername:{
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 14,
        fontWeight: 'bold'
    },

    filter:{
        height: hp('8%'),
        backgroundColor: '#171717',
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
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20, 
        paddingBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
        backgroundColor: '#171717'
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

    tagsHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'orange',
        paddingTop: 10
        // paddingBottom: 20
    },

    tagText:{
        color: 'white',
        fontSize: 16,
        opacity: 0.8
    },

    tag:{
        height: 32,
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#111213ff',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 10,
        minWidth: 40
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
    },
     
    roomModalView:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
     
    roomModalContainer:{
        minHeight: '15%',
        width: '90%',
        backgroundColor: '#212121',
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20

    },

    bar:{
        width: '100%',
        height: 20,
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },

    actualBar:{
        height: 4,
        width: 35,
        borderRadius: 5,
        opacity: 0.6,
        backgroundColor: 'white'
    },

    headerForModal:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    headerLeft:{
        // width: '25%',
        minHeight: 40,
        // backgroundColor: 'aqua',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    longPressedImage:{
        height: 65,
        width: 65,
        borderRadius: 10,
    },

    headerRight:{
        width: '72%',
        minHeight: 40,
        // backgroundColor: 'orange'
    },

    
    modalRoomStats:{
        paddingTop: 10,
        paddingBottom: 10,
    },

    statsList:{
        fontSize: 16,
        marginTop: 10,
        color: 'white',
    }
})