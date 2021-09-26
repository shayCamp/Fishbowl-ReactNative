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
        justifyContent: 'center'
    },

    userHolder:{
        height: 50,
        width: '100%',
        backgroundColor: 'orange'
    },

    searchHolder:{
        height: 40,
        width: '92%',
        backgroundColor: '#111213ff',
        borderRadius: 10,
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

    input:{
        // backgroundColor: 'orange',
        width: '80%',
        color: 'white',
        fontSize: 16,
    }
})