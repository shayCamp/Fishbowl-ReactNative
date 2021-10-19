import {ScrollView, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

container: {
    flex: 1,
    // backgroundColor: '#111213ff',
},


chatBar: {
    height: hp('8.5%'),
    width: '100%',
    alignItems:'center',
    backgroundColor: '#191919',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    marginTop: 6
},

navHeader: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#181818',
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
},

helpedReply:{
    height: hp('3.75%'),
    width: wp('35%'),
    marginRight: 20,
    borderRadius: 5,
    backgroundColor:'#0096ff',
    justifyContent: 'center',
    alignItems: 'center'
},

bottom:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 15
},

left:{
    minHeight: 65,
    width: wp('20%'),
    // backgroundColor: 'orange'
},

right:{
    minHeight: 65,
    width: wp('80%'),
    // backgroundColor: 'aqua'
},

goBack: {
    width: wp('15%'),
    alignItems:'center',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center'
},

edit: {
    width: wp('15%'),
    alignItems:'center',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center'
},

sendBtn:{
 width: wp('12%'),
 height: hp('5%'),
//  backgroundColor: 'orange',
 alignItems: 'center',
 justifyContent: 'center'
},

imgntxt:{
    width: wp('70%'),
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    opacity: 0.8
},

inputEdit:{
    minHeight: 50,
    fontSize: hp('2.2%'),
    fontWeight: 'bold',
    width: wp('90%'),
    borderBottomWidth: 1,
    color: 'white',
    marginTop: 15,
    borderColor: 'rgba(255,255,255,0.5)',
},

submitBtnHolder:{
    marginTop: 20,
    width: wp('90%'),
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between'
},

submitBtn:{
    height: hp('4%'),
    width: wp('35%'),
    borderRadius: 5,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
},

answerBtn:{
    height: hp('4%'),
    width: wp('35%'),
    borderRadius: 5,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    opacity: 0.7,
    justifyContent: 'center'
},

answeredBtn:{
    height: hp('4%'),
    width: wp('35%'),
    borderRadius: 5,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
},

saveChangesText:{
    color: 'white'
},

roomDetails:{
    fontSize: hp('2.45%'),
    color: 'white',
    opacity: 0.5
},



lower:{
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#181818',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
},

lowerColumn:{
    paddingTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: hp('35%'),
    width: '100%',
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
},

Qtext:{
    marginLeft: 10,
    color: 'white',
    fontSize: hp('2.45%'),
    maxWidth: '85%',
},

Otext:{
    marginLeft: 10,
    color: 'white',
    fontSize: hp('2.25%'),
    opacity: 0.8,
    maxWidth: '85%',
},


image:{
    height: 65,
    width: 65,
    // borderWidth: 1,
    // borderColor: 'white',
    borderRadius: 10,
    marginRight: 20
},

settingsIcon:{
    height: 21,
    width: 21,
    marginRight: 20,
    tintColor: 'white'
},

imageChatbar:{
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 25,
    backgroundColor: 'red',
    borderRadius: 10,
},

text:{
    color: 'white',
    fontSize: hp('2.25%'),
    // backgroundColor: 'red',
    maxWidth: wp('65%')
},




input:{
    // height: '100%',
    width: wp('62%'),
    // marginRight: 20,
    color: 'white',
    fontSize: hp('2.25%'),
    // backgroundColor: 'red'
},


replyHolder:{
    minHeight: hp('15%'),
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
},

helpedBox:{
    width: wp('35%'),
    marginTop: 10,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
},



top:{
    height: hp('7%'),
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
},

userToClick:{
    height: '100%',
    // backgroundColor: 'red',
    minWidth: wp('60%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    // justifyContent: 'space-between'
},

middle:{
    minHeight: hp('7%'),
    // alignItems: 'center',
    // backgroundColor: 'red',
    paddingLeft: 20,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    // width: '95%',
    justifyContent: 'center'
},

replyText:{
    color: 'white',
    fontSize: hp('2.5%'),
    // backgroundColor: 'red',
},

userImage:{
    height: 45,
    width: 45,
    borderRadius: 10,
    marginRight: 20
},

textProfile:{
    color: 'white',
    fontSize: hp('2.35%'),
    marginRight: 15
    // backgroundColor: 'red',
},

textDate:{
    color: 'white',
    fontSize: hp('2.2%'),
    // backgroundColor: 'red',
},



ScrollView:{
    // marginTop: 20,
    flex: 1,
    // backgroundColor: 'red'
}

});