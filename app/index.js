import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Tab } from './config/navigation';

//Build stylesheet with variable values
EStyleSheet.build({
  $hairlineWidth: StyleSheet.hairlineWidth,
  $white: '#FFFFFF',
  $primaryBlue: '#2d5dc4',
  $border: '#E2E2E2',

  $silver:'#C0C0C0',
  $darkGrey: '#3a303a',
  $darkText: '#343434',
  //used for debug purposes only to show dimensions of elements
  //$outline: 1,
});

//export default () => <Home/>;
export default () => <Tab/>;