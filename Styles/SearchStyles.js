import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },

    header:{
        height: 80,
        width: '100%',
        // backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },

    userHolder:{
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    searchHolder:{
        height: 42,
        width: '85%',
        backgroundColor: '#111213ff',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },

    searchIcon:{
        height: 20,
        width: 20,
        marginLeft: 15,
        tintColor: 'white',
        opacity: 0.5,
        marginRight: 15
    },
    

    followBtn:{
        height: 35,
        width: 90,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 'auto',
        marginRight: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    list:{
        // backgroundColor: '#212529',
        // backgroundColor: 'orange',
        width: '100%',
        marginBottom: 60,
    },

    followingBtn:{
        height: 35,
        width: 90,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 'auto',
        marginRight: 20,
        borderRadius: 5,
        backgroundColor: '#0096ff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    followingTxt:{
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },

    userImage:{
        height: 45,
        width: 45,
        borderRadius: 22.5,
        marginLeft: 25,
        marginRight: 20
    },

    userTxt:{
        color: 'white',
        fontSize: 16,
    },

    input:{
        // backgroundColor: 'orange',
        width: '80%',
        color: 'white',
        fontSize: 16,
    }
})