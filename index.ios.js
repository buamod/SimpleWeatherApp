import React, {Component} from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from './weatherAPI'

class App extends Component {

  componentWillMount(){
    this.state = {hideStatusBar:false}
  }

  componentDidMount(){
    this.getlocation()
    fetchWeather(-21, 28).then(res => console.log(res))
    setInterval(() => {
      this.setState({hideStatusBar:true})
    }, 1000)
  }

  getlocation(){
    navigator.geolocation.getCurrentPosition(
      (postData) => console.log(postData),
      (error) => alert(error),
      {timeout:10000}
    )
  }

  
  render(){
    console.log('dasdasdasd')
    return(
  <View style={allStyles.container}>
  <StatusBar hidden={this.state.hideStatusBar}/>    
  <View style={allStyles.headerStyle}>
  <Icon  name={'ios-sunny'} size={80} color={'white'}/>  
  <Text style={allStyles.temp}>24°</Text>  
  </View>

<View style={allStyles.bodyStyle}>
  <Text style={allStyles.title}>Today's <Text style={{color:'red'}}>Weather!</Text></Text>
  <Text style={allStyles.subTitle}>Sub title</Text>
  </View>
  </View>
  
    )
  }
}

const allStyles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:`#FFD017`
},
headerStyle:{
  alignItems:'center', 
  justifyContent:'space-around',  
  flex:1, 
 // backgroundColor: 'red',
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
  margin:10,
 // backgroundColor: 'yellow'
},
title:{
  fontFamily:'HelveticaNeue-Bold',
  fontSize:78,
  color:'white',
  marginBottom:5,
},
subTitle:{
  fontFamily:'HelveticaNeue-Medium',
  fontSize:24,
  color:'white'
}
})




AppRegistry.registerComponent('SimpleWeatherApp', () => App)
