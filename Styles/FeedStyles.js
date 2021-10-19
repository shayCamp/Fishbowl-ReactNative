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

    appTitle:{
        color: 'white',
        fontSize: hp('2.3%'),
        opacity: 0.8,
        marginLeft: 20,
        marginBottom: 10,
    },
        
    appFeedT:{
        color: 'white',
        fontSize: hp('3%'),
        fontWeight: 'bold',
        marginLeft: 20
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
        fontSize: hp('2.1%'),
        color: 'white',
        opacity: 0.8,
        marginRight: 15
    },

    filterOptionText:{
        fontSize: hp('2.2%'),
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
        fontSize: hp('2.25%'),
    },

    Title: {
        color: 'rgba(255,255,255, 1)',
        fontSize: hp('2.5%'),
        maxWidth: wp('60%'),
        fontWeight: 'normal',
        // marginLeft: 25,
        marginBottom: 10,
        // backgroundColor: 'yellow'
    },

    Tag:{
        fontSize: hp('2%'),
        maxWidth: wp('60%'),
        color: 'rgba(255,255,255, 0.9)',
        marginBottom: 5,
    },

    Question: {
        color: 'white',
        fontSize: hp('2.75%'),
        // marginLeft: 25,
        maxWidth: wp('60%'),
        fontWeight: 'bold',
        lineHeight: 35
    },

    sortTxt:{
        marginTop: 16,
        fontSize: hp('2%'),
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
        height: hp('5%'),
        alignItems: 'center',
        flexDirection: 'row',
        width: wp('90%')
    },

    modalContainer:{
        height: hp('40%'),
        backgroundColor: '#212121',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 'auto',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    username:{
        color: 'rgba(255,255,255, 0.8)',
        fontSize: hp('2%'),
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor:'orange',
        width: 90,
        marginBottom: 10
    },

    filter:{
        height: hp('8%'),
        backgroundColor: '#171717',
    },

    image:{
        height: 90,
        width: 90,
        marginBottom: 10,
        borderRadius: 14,
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
        // backgroundColor: 'red',

        minHeight: 90,
        width: wp('30%'),
    },

    right:{
        minHeight: 90,
        width: wp('70%'),
        // backgroundColor: 'pink'
    },

    border:{
        fontSize: 16,
        color: 'rgba(255,255,255, 0.15)'
    },

    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('7%'),
        width: '100%',
        // marginBottom: 10
    },

    noRooms: {
        fontSize: hp('2.2%'),
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
        fontSize: hp('2%'),
        opacity: 0.8
    },

    tag:{
        height: hp('4%'),
        padding: 12,
        borderRadius: 5,
        backgroundColor: '#111213ff',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 10,
        minWidth: wp('5%')
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

    answeredText:{
        color: 'white',
        fontSize: hp('2.1%')
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
})