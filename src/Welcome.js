import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import Button from '../components/Button'

const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={'https://svgshare.com/i/s0C.svg'} style={styles.logo} />
            <Button title="Já possui uma conta? Acesse!" color='green'onPress={()=>{navigation.navigate('Login')}}/>
            <Button title="criar uma conta" color='yellow'onPress={()=>{console.log(`oi`)}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBF2',
        marginTop: 0,
        padding: 30,
        justifyContent: 'center'
    },
    logo: {
        height: 33,
        width: 230
    },
    textWrapper: {
        padding: 30,
        marginBottom: 20
    },
    name: {
        flexWrap: 'wrap',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10
    },
    ingredients: {
        marginTop: 5,
        fontSize: 16
    },
    subtitle: {
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },
    prepMode: {
        marginTop: 5,
        fontSize: 16
    },
});

export default Welcome;