import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import Judul from './component/judul';
import Login from './component/login';
import Signup from './component/signup';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.gambar}
        source = {require('./konten/logo.png')}/>
      <Judul/>
      <Login/>
      <Signup/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#162344',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: '#ffffff'
  },
   gambar:{
    alignItems: 'center',
    justifyContent: 'center',
    width : 150,
    height : 150,
    marginTop : 35
}
});
