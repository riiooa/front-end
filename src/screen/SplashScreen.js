import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/tixid.png'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000);
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.xxi} />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C356A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    xxi: {
        width: 300,
        height: 300,
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: 20,
    },
    judul: {
        color: 'goldenrod',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
      },
})

export default SplashScreen