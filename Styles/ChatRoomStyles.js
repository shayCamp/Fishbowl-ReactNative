import {ScrollView, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

container: {
    flex: 1,
    // backgroundColor: '#111213ff',
},


chatBar: {
    height: 60,
    width: '100%',
    alignItems:'center',
    backgroundColor: '#191919',
    flexDirection: 'row',
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
    height: 25,
    width: 130,
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
    width: '20%',
    // backgroundColor: 'orange'
},

right:{
    minHeight: 65,
    width: '80%',
    // backgroundColor: 'aqua'
},

goBack: {
    width: '15%',
    alignItems:'center',
    // backgroundColor: 'red',
    height: 40,
    justifyContent: 'center'
},

edit: {
    width: '15%',
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
    width: '70%',
    // backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    opacity: 0.8
},

inputEdit:{
    minHeight: 50,
    fontSize: 16,
    fontWeight: 'bold',
    width: '95%',
    borderBottomWidth: 1,
    color: 'white',
    marginTop: 15,
    borderColor: 'rgba(255,255,255,0.5)',
},

submitBtnHolder:{
    marginTop: 20,
    width: '90%',
    // backgroundColor: 'orange',
    alignItems: 'flex-end'
},

submitBtn:{
    height: 35,
    width: 110,
    borderRadius: 5,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
},

saveChangesText:{
    color: 'white'
},

roomDetails:{
    fontSize: 18,
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
    // justifyContent: 'center',
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
},

Qtext:{
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    maxWidth: '85%',
},

Otext:{
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
    opacity: 0.5,
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
    height: 20,
    width: 20,
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
    fontSize: 18,
    // backgroundColor: 'red',
    maxWidth: '65%'
},




input:{
    height: '100%',
    width: wp('62%'),
    // marginRight: 20,
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'red'
},



replyHolder:{
    minHeight: 80,
    width: '100%',
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)',
},

deleteBox:{
    width: 100,
    marginTop: 10,
    backgroundColor: '#fd4d4d',
    alignItems: 'center',
    justifyContent: 'center'
},

helpedBox:{
    width: 140,
    marginTop: 10,
    backgroundColor: '#0096ff',
    alignItems: 'center',
    justifyContent: 'center'
},

top:{
    height: 55,
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
},

userToClick:{
    height: '100%',
    // backgroundColor: 'red',
    minWidth: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    // justifyContent: 'space-between'
},

middle:{
    minHeight: 50,
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
    fontSize: 18,
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
    fontSize: 18,
    marginRight: 15
    // backgroundColor: 'red',
},

textDate:{
    color: 'white',
    fontSize: 16,
    // backgroundColor: 'red',
},



ScrollView:{
    // marginTop: 20,
    flex: 1,
    // backgroundColor: 'red'
}

});