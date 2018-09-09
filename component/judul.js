import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
export default class Judul extends Component {
    render(){
      return(
        <Text style={styles.tulisan}> Gentleman Cut</Text>
      )
    }
}

const styles = StyleSheet.create({
  tulisan:{
    color: 'white',
    fontSize: 37,
    fontFamily: 'Lobster 1.4',
    textAlign: 'center',
    marginTop : 10
  }
});