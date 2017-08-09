import React, {Component} from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet
} from 'react-native';


class App extends Component {
  render(){
    return(
  <View style={{alignItems:'center', justifyContent:'center',  flex:1, backgroundColor:'lightblue'}}>
  <Text >Hello World</Text>
  </View>
    )
  }
}

AppRegistry.registerComponent('SimpleWeatherApp', () => App)