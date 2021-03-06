import React, { Component } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import {
    
} from 'native-base';

export default class Login extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.container}>
                <Image style={styles.gambar}
                source = {require('./logo.png')}/>
                </View>

                <Text style={styles.tulisan}> Gentleman Cut</Text>

            <View style={{padding: 45}}>
                <TextInput style={styles.input}
                placeholder='Username or Email' underlineColorAndroid='transparent' />
                <TextInput style={styles.inputa} 
                placeholder='Password' secureTextEntry={true} underlineColorAndroid='transparent'/>
                <View style={{margin:10}} />

            <View style={{width: 282,marginBottom:80}}>
               <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="LOG IN" color="#F6921E" />
               
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
        marginBottom: 10,
        marginTop: -5,
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
        marginBottom:10,
        fontFamily: 'Roboto-Regular'
        },

        gambar:{
    
            width : 150,
            height : 150,
            marginTop : 40,
            marginLeft: 110
        },

        tulisan:{
          color: 'white',
          fontSize: 37,
          fontFamily: 'Lobster 1.4',
          textAlign: 'center',
        }
    }
    
);