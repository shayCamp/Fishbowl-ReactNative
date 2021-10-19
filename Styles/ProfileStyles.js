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

    userImage:{
        height: 40,
        width: 40,
        borderRadius: 5,
        marginLeft: 25,
        marginRight: 20
    },

    userUsername:{
        color: 'white',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'
    },

    roomInfo:{
        paddingBottom: 25,
        paddingTop: 15,
        width: '100%',
    },

    Title: {
        color: 'white',
        fontSize: hp('2.25'),
        marginLeft: 25,
        marginBottom: 15
    },

    Question: {
        color: 'white',
        fontSize: hp('2.5'),
        marginLeft: 25,
        maxWidth: wp('85%')
    },

    tagHolder: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20
    },

    tag:{
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('4%'),
        width: wp('20%'),
        marginLeft: 15,
        borderRadius: 5,
        backgroundColor: '#191919',
    },

    answeredHolder:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },

    answeredText:{
        color: 'white',
        fontSize: hp('2'),
    },

    tagName:{
        color: 'white',
        fontSize: hp('2'),
    },

    block:{
        height: hp('4%'),
        marginRight: 20,
        width: wp('30%'),
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


    profileImage:{
        height: hp('25%'),
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
        fontSize: hp('3'),
        marginTop: 8,
        color:'white',
        fontWeight: 'bold'
    },

    email:{
        fontSize: hp('2'),
        color: 'rgba(255,255,255, 0.9)',
        marginTop: 8,
        maxWidth: wp('90%')
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

    createRoomText:{
        color: 'white',
        fontSize: hp('2.0%'),
    },

    userInfo:{
        height: hp('8%'),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
})