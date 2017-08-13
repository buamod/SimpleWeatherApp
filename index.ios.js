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
  <View style={allStyles.container}>    
  <View style={allStyles.headerStyle}>
  <Text >icon</Text>  
  <Text style={allStyles.temp}>24°</Text>  
  </View>

<View style={allStyles.bodyStyle}>
  <Text >Title</Text>
  <Text >Sub title</Text>
  </View>
  </View>
  
    )
  }
}

const allStyles = StyleSheet.create({
container:{
  flex:1
},
headerStyle:{
  alignItems:'center', 
  justifyContent:'space-around',  
  flex:1, 
  backgroundColor: 'red',
  flexDirection:'row'
},
temp:{
  fontFamily:'HelveticaNeue-Bold',
  fontSize:24,
  color:'white'
},
bodyStyle:{
  alignItems:'flex-start', 
  justifyContent:'flex-end',  
  flex:5, 
  backgroundColor: 'yellow'

}
})



AppRegistry.registerComponent('SimpleWeatherApp', () => App)
