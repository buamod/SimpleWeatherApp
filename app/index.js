import React from 'react';
import {AppRegistry} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

//Build stylesheet with variable values
EStyleSheet.build({
  $white: '#FFFFFF',
  //used for debug purposes only to show dimensions of elements
  //outline:0
});

export default () => <Home/>;
AppRegistry.registerComponent('SimpleWeatherApp', () => Home);