import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'

export default function Login({navigation}) {

    const [height, setHeight] = useState('8%')
    const [username, setUsername] = useState()

    const goToChat = () => {
        if(username != undefined){
            console.log(username)
            navigation.navigate('Chat', {name: username})
        }
        else {
            Alert.alert('Username Required', 'Please Enter Your Name !', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]);
        }
    }

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => {
            setHeight('12%')
        });

        Keyboard.addListener("keyboardDidHide", () => {
            setHeight('8%')
        });
    }, [])

    return (
      <View style={loginStyle.container}>
        <View style={[loginStyle.inputBox, {height: height}]}>
            <TextInput
                style={loginStyle.nameBox}
                placeholder="Username"
                onChangeText={(name) => setUsername(name)}
            />
            <TouchableOpacity onPress={goToChat}>
                <Image 
                source={require('../assets/chat.png')}
                style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
}

const loginStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputBox: {
        width: '100%',
        height: '8%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nameBox: {
        width: '60%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 8,
        fontSize: 20,
        borderColor: 'grey'
    }
})