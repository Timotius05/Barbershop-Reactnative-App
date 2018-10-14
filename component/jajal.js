import React, { Component } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button,
    KeyboardAvoidingView,
    image
} from 'react-native';
import {
    
} from 'native-base';

export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.container}>
                <Image style={styles.gambar}
                source = {require('./konten/logo.png')}/>
                </View>

            <View style={{padding: 45}}>
                <TextInput style={styles.input}
                placeholder='Username or Email' underlineColorAndroid='transparent' />
                <TextInput style={styles.inputa} 
                placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'/>
                <View style={{margin:10}} />

            <View style={{width: 282}}>
               <Button title="LOG IN" color="#F6921E" />
               
                  </View>
                  </View>
                  </KeyboardAvoidingView>
            )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#162344'
    },
    input:{
        height: 40,
        width: 280,
        backgroundColor: 'white',
        marginBottom: 20,
        color: 'black',
        borderRadius:2,
        color: '#162344',
        fontSize: 13,
        fontFamily: 'Roboto-Regular'
    },
    
    inputa:{
        height: 40,
        width: 280,
        backgroundColor: 'white',
        color: 'black',
        borderRadius:2,
        color: '#162344',
        fontSize: 13,
        fontFamily: 'Roboto-Regular'
        },

        gambar:{
            alignItems: 'center',
            justifyContent: 'center',
            width : 150,
            height : 150,
            marginTop : 35
        }
    }
    
);