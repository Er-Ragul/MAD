import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import { currentTime } from './currentTime';

export default function Chat({ route }) {

    let { name } = route.params

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", () => {
            setHeight('11%')
        });

        Keyboard.addListener("keyboardDidHide", () => {
            setHeight('7%')
        });
    }, [])

    const [height, setHeight] = useState('7%')
    const [message, setMessage] = useState()
    const [chatList, setChatList] = useState([
        {name: 'One', message: 'Hello', place: 'flex-end'},
        {name: 'Two', message: 'Hi', place: 'flex-start'},
        {name: 'One', message: 'How are you?', place: 'flex-end'},
        {name: 'Two', message: 'Doing Good!, How about you?', place: 'flex-start'},
        {name: 'One', message: 'Good', place: 'flex-end'},
        {name: 'Two', message: 'Tell me any updates', place: 'flex-start'},
        {name: 'One', message: 'Yes chat app is ready!', place: 'flex-end'},
        {name: 'Two', message: 'Great !', place: 'flex-start'}
    ])

    const sendMsg = () => {
        if(message != undefined && message != ''){
            setChatList(prevChatList => [{
                name: 'One', 
                message: message,
                place: 'flex-end'
            }, ...prevChatList])
            setMessage()
        }
    }

    return (
      <View style={chatStyle.container}>
        <View style={chatStyle.msgArea}>
            <FlatList
                data={chatList}
                renderItem={({ item }) => (
                    <View style={[chatStyle.msgWrapper, {alignItems: item.place}]}>
                        <View style={chatStyle.msgBackground}>
                            <Text style={{fontSize: 14}}>{item.message}</Text>
                            <Text style={{fontSize: 10, color: '#aaa9a9'}}>{currentTime()}</Text>
                        </View>
                    </View>
                )}
                inverted={true}
            />
        </View>
        <View style={[chatStyle.inputBox, {height: height}]}>
            <TextInput
                style={chatStyle.msgBox}
                placeholder="Username"
                value={message}
                onChangeText={(msg) => setMessage(msg)}
            />
            <TouchableOpacity onPress={sendMsg}>
                <Image 
                source={require('../assets/send.png')}
                style={{width: 50, height: 50}}
                />
            </TouchableOpacity>
        </View>
      </View>
    );
}

const chatStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputBox: {
        width: '100%',
        height: '7%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 4
    },
    msgBox: {
        width: '80%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 8,
        fontSize: 20,
        borderColor: 'grey'
    },
    msgArea: {
        width: '96%',
        height: '90%',
        marginBottom: 6,
    },
    msgWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginVertical: 4,
    },
    msgBackground: {
        backgroundColor: '#fdfbcf', 
        borderRadius: 8, 
        padding: 10,
        marginVertical: 4
    }
})