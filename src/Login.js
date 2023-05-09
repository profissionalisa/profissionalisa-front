import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Input from '../components/Input'
import Button from '../components/Button'

const Login = ({navigation}) => {
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input label="E-mail" placeholder='email' value={email} onChangeText={text => setEmail(text)}/>
            <Input label="Senha" placeholder='senha' value={password} onChangeText={text => setPassword(text)}/>
            <Button title="entrar" color='green' onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBF2',
        marginTop: 0,
        padding: 30,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 400,
        color: '#14793C',
        marginBottom: 10
    }
})

export default Login