import {ScrollView, StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    container:{
        flex: 1
    },

    header:{
        height: 80,
        width: '100%',
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },

    goBack: {
        width: '15%',
        alignItems:'center',
        // backgroundColor: 'red',
        height: 40,
        justifyContent: 'center'
    },

    Title:{
        width: '70%',
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
        fontSize: 18,
        // backgroundColor: 'red',
    },

    postText:{
        color: 'white',
        fontSize: 18,
        opacity: 0.8
        // backgroundColor: 'red',
    },

    input:{
        minHeight: 50,
        fontSize: 16,
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
        height: 32,
        padding: 12,
        borderRadius: 50,
        backgroundColor: '#111213ff',
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
        height: 32,
        padding: 12,
        borderRadius: 50,
        backgroundColor: "#0096ff",
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 10,
        marginLeft: 10
    },

    boxHolder:{
        width: '95%',
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'red',
        marginTop: 15, 
        marginBottom: 15,
    },

    inputQ:{
        minHeight: 50,
        fontSize: 16,
        fontWeight: 'bold',
        width: '90%',
        color: 'white',
        marginTop: 15,
    },

    spacing: {
        width: '15%',
        alignItems:'center',
        // backgroundColor: 'red',
        height: 40,
        justifyContent: 'center'
    },
})