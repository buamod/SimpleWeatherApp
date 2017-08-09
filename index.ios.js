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
  <View style={generalStyles.viewStyling}>
  <Text >Hello World</Text>
  </View>
    )
  }
}

const generalStyles = StyleSheet.create({
  viewStyling:{
  alignItems:'center', 
  justifyContent:'center',  
  flex:1, 
  backgroundColor:'lightblue'
  }
})

AppRegistry.registerComponent('SimpleWeatherApp', () => App)