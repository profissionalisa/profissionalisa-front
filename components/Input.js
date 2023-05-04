import { View, TextInput, Text, StyleSheet } from 'react-native'

const Input = (props) => {
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{props.label}</Text>    
            <TextInput 
                style={styles.input}
                onChangeText={props.onChangeText}
                placeholder= {props.placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 10
    },
    input:{
        backgroundColor: '#fff',
        height: 60,
        padding: 15,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#14793C',
        fontSize: 15,
    },
    inputLabel:{
        fontWeight: 400,
        color: '#B64926'
    }
})

export default Input