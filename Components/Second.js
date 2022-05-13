import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const Second = ({ navigation }) => {
    const onPressHandller = () => {
        navigation.navigate('Home');
        // Go back also does the same as back button on navigation bar
        // navigation.goBack();

    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Second screen</Text>
            <Pressable onPress={onPressHandller}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#fff' : '#fcc' })} ><Text style={styles.text}>Goto Home Screen</Text>
            </Pressable>
        </View>
    )
}

export default Second

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        margin: 10,
        color: 'black'
    },
})