import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image } from 'expo-image';

const Home = () => {
    return(
        <View style={styles.container}>
            <Image source={'https://svgshare.com/i/s0C.svg'} style={styles.logo} />
            <View style={styles.welcomeContainer}>
                <Text style={styles.title}>Bem vinda,</Text>
                <Text style={styles.titleName}>Giovanna</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBF2',
        padding: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 400,
        color: '#B64926',
    },
    titleName: {
        fontSize: 32,
        fontWeight: 500,
        color: '#14793C',
    },
    logo: {
        height: 20,
        width: 130,
        marginTop: 50,
        marginBottom: 20
    },
    welcomeContainer: {

    }
})

export default Home