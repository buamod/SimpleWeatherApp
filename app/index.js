import React from 'react';
import {AppRegistry} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

//Build stylesheet with variable values
EStyleSheet.build({
  $white: '#FFFFFF',
  $primaryBlue: '#2d5dc4',
  $silver:'#C0C0C0',
  $darkGrey: '#3a303a',
  $darkText: '#343434',
  //used for debug purposes only to show dimensions of elements
  $outline: 1,
});

export default () => <Home/>;
AppRegistry.registerComponent('SimpleWeatherApp', () => Home);