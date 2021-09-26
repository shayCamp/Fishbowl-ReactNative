import {StyleSheet} from 'react-native'

export default StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#121212'
},

svg: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
},
desc: {
    height: '36%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'orange'
},
loginHolder: {
    height: '14%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'teal'
},

loginBtn: {
    height: 70,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#0096ff'
},

input:{
    height: '80%',
    width: '60%',
    // backgroundColor: 'red',
    color: 'white',
    marginRight: 20,
    fontSize: 18,
},

text: {
    fontSize: 22,
    color: 'white'
},
Large: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    marginBottom: 20,
    maxWidth: '80%'
},
Small: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    maxWidth: '85%',
    opacity: 0.6
},

});