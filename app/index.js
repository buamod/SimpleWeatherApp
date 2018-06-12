import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import { Tabs, RootStack } from './config/navigation';
 
//Build stylesheet with variable values
EStyleSheet.build({
  $hairlineWidth: StyleSheet.hairlineWidth,
  $white: '#FFFFFF',
  $primaryBlue: '#2d5dc4',
  $silver:'#C0C0C0',
  $darkGrey: '#3a303a',
  $darkText: '#343434',
  //used for debug purposes only to show dimensions of elements
  $outline: 1,
});

//export default () => <Tabs/>;
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}