import React, {Component} from 'react';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';


class App extends Component {
  render(){
    return(
  <View style={{alignContent:'center', justifyContent:'center',  flex:1, backgroundColor:'lightblue'}}>
  <Text >Hello World</Text>
  </View>
    )
  }
}

AppRegistry.registerComponent('SimpleWeatherApp', () => App)