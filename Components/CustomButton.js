import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

function CustomButton(props) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.submit}
        >
            <Text style={styles.button_text}>{props.title}</Text>
        </TouchableOpacity>



    )
}
export default CustomButton
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        borderColor: 'black',
        borderRadius: 5,
        marginTop: 20,
        width: 100
    },
    button_text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        margin: 10,
        textAlign: 'center'
    },
})