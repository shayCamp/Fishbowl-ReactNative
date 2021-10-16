import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    noRoomContainer: {
        flex: 1,
        // backgroundColor: 'orange',
        width: '100%',
        alignItems: 'center'
    },

    createRoomText:{
        fontSize: 18,
        color: 'white',
    },

    userImage:{
        height: 35,
        width: 35,
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15
    },

    userUsername:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },

    roomInfo:{
        paddingBottom: 25,
        paddingTop: 15,
        width: '100%',
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

    answeredText:{
        color: 'white',
        fontSize: 16
    },

    tagName:{
        color: 'white',
        fontSize: 15
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

    noRoomHolder:{
        marginTop: 20,
        borderRadius: 5,
        width: '90%',
        padding: 10,
        backgroundColor: '#212224'
    },

    edit:{
        height: hp('5%'),
        width: '100%',
        backgroundColor: '#181818',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    settingsIcon:{
        height: 22,
        width: 22,
        marginRight: 20,
        tintColor: 'white'
    },


    profileImage:{
        height: 200,
        width: '100%',
        backgroundColor: '#181818',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.5)',
    },

    username:{
        fontSize: 24,
        marginTop: 8,
        color:'white',
        fontWeight: 'bold'
    },

    email:{
        fontSize: 16,
        color: 'rgba(255,255,255, 0.9)',
        marginTop: 8,
        maxWidth: '90%'
    },

    image:{
        height: 110,
        width: 110,
        borderRadius: 55,
        borderWidth: 5,
        borderColor: 'rgba(17, 18, 19, 0.6)'
    },

    room:{
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255, 0.4)',
        width: '100%',
        // backgroundColor: 'orange'
    },

    userInfo:{
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
})