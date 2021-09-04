import {StyleSheet} from 'react-native'

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

text:{
    color: 'white',
    fontSize: 18,
    // backgroundColor: 'red',
    maxWidth: '65%'
},

input:{
    marginLeft: 60,
    marginRight: 50,
    height: '100%',
    width: '55%',
    color: 'white',
    fontSize: 18
}

});