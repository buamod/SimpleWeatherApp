import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { RootStack } from './config/navigation';
import { AlertProvider } from './components/Alert';
import store from './config/store';

//Build stylesheet with variable values
EStyleSheet.build({
  $hairlineWidth: StyleSheet.hairlineWidth,
  $white: '#FFFFFF',
  $primaryBlue: '#2d5dc4',
  $border: '#E2E2E2',
  $inputText: '#797979',

  $silver:'#C0C0C0',
  $darkGrey: '#3a303a',
  $darkText: '#343434',
  //used for debug purposes only to show dimensions of elements
  //$outline: 1,
});

//export default () => <Tabs/>;
export default class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AlertProvider>
          <RootStack/> 
        </AlertProvider>
        </Provider>
    );
  }
}