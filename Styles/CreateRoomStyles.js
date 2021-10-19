import {ScrollView, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex: 1
    },

    header:{
        height: hp('10%'),
        width: '100%',
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },

    goBack: {
        width: wp('15%'),
        alignItems:'center',
        // backgroundColor: 'red',
        height: 45,
        justifyContent: 'center'
    },

    Title:{
        width: wp('70%'),
        // backgroundColor: 'orange',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        opacity: 0.8
    },

    mainSection:{
        // backgroundColor: 'orange',
        flex: 3,
        width: '100%',
        alignItems: 'center'
        // marginBottom:60,
    },

    text:{
        color: 'white',
        fontSize: hp('2.25%'),
        // backgroundColor: 'red',
    },

    postText:{
        color: 'white',
        fontSize: hp('2.25%'),
        opacity: 0.8
        // backgroundColor: 'red',
    },

    input:{
        minHeight: hp('7%'),
        fontSize: hp('2%'),
        fontWeight: 'bold',
        width: '90%',
        borderBottomWidth: 1,
        color: 'white',
        marginTop: 15,
        borderColor: 'rgba(255,255,255,0.5)',
    },

    boxes:{
        flex: 3,
        width: '100%',
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },

    tag:{
        height: hp('5%'),
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#181818',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 10,
        minWidth: 40
    },

    tagText:{
        color: 'white',
        opacity: 0.4
    },

    textSelected:{
        color: 'white',
        opacity: 0.9
    },

    tagSelected:{
        height: hp('5%'),
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#0096ff',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 10,
        minWidth: 40
    },


    boxHolder:{
        width: wp('95%'),
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'red',
        marginTop: 15, 
        marginBottom: 15,
    },

    inputQ:{
        minHeight: hp('6%'),
        fontSize: hp('2%'),
        fontWeight: 'bold',
        width: '90%',
        color: 'white',
        marginTop: 15,
    },

    spacing: {
        width: wp('15%'),
        alignItems:'center',
        // backgroundColor: 'red',
        height: 45,
        justifyContent: 'center'
    },
})