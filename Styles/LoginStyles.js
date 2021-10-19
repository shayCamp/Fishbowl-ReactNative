import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({

container: {
    height: hp('100%')
},

//Login Page

svg: {
    height: hp('40%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
},

desc: {
    height: hp('32%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'orange'
},

loginWithG:{
    height: hp('15%'),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink'
},


loginHolder: {
    height: hp('10%'),
    width: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'teal',
},

//Login Page

//Signup Page

nav:{
    height: hp('12%'),
    width: '100%',
    // backgroundColor: 'orange',
    // alignItems: 'center',
    justifyContent: 'center',
},


svg2: {
    height: hp('20%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
},

desc2: {
    height: hp('30%'),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // backgroundColor: 'orange'
},

//Signup Page





back:{
    height: hp('7%'),
    width: wp('7%'),
    tintColor: 'white',
    marginLeft: 20
},

submit: {
    height: hp('8%'),
    width: wp('85%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#0096ff',
    overflow: 'hidden'
},


createUser:{
    flex: 1
},


SigninInactive:{
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'orange',
    height: 30,
},


input:{
    height: hp('8%'),
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(255,255,255,0.5)',
    width: wp('85%'),
    textAlign: 'center',
    // backgroundColor: 'red',
    color: 'white',
    fontSize: hp('2.5%'),
},

Large: {
    textAlign: 'center',
    fontSize: hp('4.5%'),
    color: 'white',
    maxWidth: '80%'
},
Small: {
    textAlign: 'center',
    fontSize: hp('2.5%'),
    color: 'white',
    maxWidth: '85%',
    opacity: 0.6
},
SmallT: {
    textAlign: 'center',
    fontSize: hp('2.5%'),
    color: 'white',
    opacity: 0.6
},

SmallActive: {
    textAlign: 'center',
    fontSize: hp('2.5%'),
    color: 'white',
    maxWidth: '85%',
},

});