import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class signup extends Component {
  render() {
    return (
      <Text style={{color:'white', marginTop: 10}}>
        Don't have account?
        <Text style={{color: '#F6921E',fontWeight: 'bold'}}>
        SignUp
        </Text>
      </Text>
    );
  }
}
