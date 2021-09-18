import {ScrollView, StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#111213ff',
},

chatBar: {
    height: 60,
    width: '100%',
    alignItems:'center',
    backgroundColor: '#212224ff',
    flexDirection: 'row',
},

navHeader: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#212224ff',
    // backgroundColor:'teal',
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
},

goBack: {
    width: '15%',
    alignItems:'center',
    // backgroundColor: 'red'
},

imgntxt:{
    width: '80%',
    // backgroundColor: 'orange',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
},




lower:{
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: '#212224ff',
    width: '100%'
},

Qtext:{
    color: 'white',
    fontSize: 16,
    maxWidth: '85%',
    textAlign: 'center'
},


image:{
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 20
},

imageChatbar:{
    height: 40,
    width: 40,
    marginLeft: 20,
    marginRight: 25,
    backgroundColor: 'red',
    borderRadius: 20,
},

text:{
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'red',
    maxWidth: '65%'
},


input:{
    height: '100%',
    width: '60%',
    marginRight: 20,
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'red'
},

replyHolder:{
    minHeight: 80,
    width: '100%',
    marginTop: 6
    // backgroundColor: 'grey',
    // alignItems: 'center'
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
    borderRadius: 45/2,
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