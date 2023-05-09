import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Button = (props) => {
    var [ isPress, setIsPress ] = React.useState(false);

    const getTextStyle = (style) => {
        let color;
        
        if(style == 'green'){
            color = styles.buttonTextGreen;
        } else {
            color = styles.buttonTextYellow;
        }

        return color
    }

    const buttonTouchProps = (style) => {
        let color , color_press;
        
        if(style == 'green'){
            color = styles.btnGreen;
            color_press = styles.btnGreenPress;
        } else {
            color = styles.btnYellow;
            color_press = styles.btnYellowPress;
        }
        return {
            activeOpacity: 1,
            underlayColor: '#00381E',
            style: isPress ? color_press : color,
            onHideUnderlay: () => setIsPress(false),
            onShowUnderlay: () => setIsPress(true),
            onPress: () => '',
        }
    } 

    return (
        <TouchableHighlight {...buttonTouchProps(props.color)} onPress={props.onPress}>
            <View>
                <Text style={getTextStyle(props.color)}>{props.title}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    btnGreen: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        fontSize: 16,
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#14793C',
    },
    btnGreenPress: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 16,
        justifyContent: 'center',
        height: 50,
        borderRadius: 4,
        backgroundColor: '#00381E',
    },
    btnYellow: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        fontSize: 16,
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: '#FFB03B',
    },
    btnYellowPress: {
        marginTop: 10,
        alignItems: 'center',
        fontSize: 16,
        justifyContent: 'center',
        height: 50,
        borderRadius: 4,
        backgroundColor: '#E7941A',
    },
    buttonTextGreen:{
        color: '#fff'
    },
    buttonTextYellow:{
        color: '#B64926'
    }
})

export default Button;