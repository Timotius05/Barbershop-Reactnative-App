import React, { Component } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    View,
    Button
} from 'react-native';

export default class Login extends Component {

    render() {
        return (
            <View style={{padding: 45}}>
                <TextInput style={styles.input} placeholder='Username or Email' />
                <TextInput style={styles.input} placeholder='Password' />
                <View style={{margin:10}} />
                <Button
                          onPress={this.props.onLoginPress}
                          title="Login"
                          color="#F6921E"
                      />
                  </View>
            )
    }
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        width: 280,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: 'black',
        
    }
    }
);