/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
//onPressLearnMore();
export default class MakeItCount extends Component {
  state = {count: 0}
  render() {
    let tCount = this.state.count;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={{fontSize:20, color:'#fff'}}>Make It Count</Text>

        </View>

        <View style={styles.count}>
          <TouchableOpacity onPress={()=>this.setState({ count: this.state.count+1 })}>
            <Text style={{fontSize:140, color:'#FF4081'}}>{tCount}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={()=>this.setState({ count: 0 })}>
            <Text style={{fontSize:30, color:'#1A237E'}}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.setState({ count: this.state.count-1 })}>
            <Text style={{fontSize:30, color:'#1A237E'}}>Minus</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5'
    //margin: 10,
  },
  count: {
    flex:8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8eaf6'
  },
  buttons: {
    flex:3,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e8eaf6'
  },
});

AppRegistry.registerComponent('MakeItCount', () => MakeItCount);
