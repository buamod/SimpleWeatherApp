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
import Highlight from 'react-native-highlight-words'

class App extends Component {

  componentWillMount(){
  //  this.state = {hideStatusBar:false}
  this.state = {
    temp:0,
    weather: 'Default'
  }
  }

  componentDidMount(){
    this.getlocation2()
//    this.getlocation()

    //Testing only
    // fetchWeather(-21, 28).then(res => console.log(res))
    // setInterval(() => { 
    //   this.setState({hideStatusBar:true})
    // }, 1000)
  }

  getlocation2(){
    navigator.geolocation.getCurrentPosition(
      (postData) => console.log(postData)),
      (error) => alert(error),
      {timeout:10000}
  }


  getlocation(){
    navigator.geolocation.getCurrentPosition(
      (postData) => fetchWeather(postData.coords.latitude, postData.coords.longitude)
      .then (res => this.setState({
        temp:Math.round(res.temp),
        weather:res.weather
      })),
      (error) => alert(error),
      {timeout:10000}
    )

    //Testing only
    // navigator.geolocation.getCurrentPosition(
    //   (postData) => console.log(postData),
    //   (error) => alert(error),
    //   {timeout:10000}
    // )
  }

  
  render(){
    return(
  <View style={[allStyles.container, {backgroundColor:phrases[this.state.weather].background}]}>
  {/* <StatusBar hidden={this.state.hideStatusBar}/>     */}
  <StatusBar hidden={true}/>    
  <View style={allStyles.headerStyle}>
  <Icon  name={iconNames[this.state.weather]} style={allStyles.iconStyle}/>  
  <Text style={allStyles.temp}>{this.state.temp}°</Text>  
  </View>

<View style={allStyles.bodyStyle}>
  <Highlight 
  style ={allStyles.title}
  highlightStyle={{color: phrases[this.state.weather].color}}
  searchWords={[phrases[this.state.weather].highlight]}
  textToHighlight={phrases[this.state.weather].title}
  />
  <Text style={allStyles.subtitle}>{phrases[this.state.weather].subtitle}</Text>
  </View>
  </View>
  
    )
  }
}

function toCelsius(k) {
  return k //- 273.15
}

const iconNames = {
	Default: 'md-time',
	Clear: 'md-sunny',
	Rain: 'md-rainy',
	Thunderstorm: 'md-thunderstorm' ,
	Clouds: 'md-cloudy' ,
	Snow: 'md-snow' ,
	Drizzle: 'md-umbrella' ,
	Mist: 'md-partly-sunny'
}

const phrases = {
	Default: {
		title: "Fetching the Weather",
		subtitle: "Be patient, you're witnessing a miracle",
		highlight: "miracle",
		color: "#636363",
		background: "#9C9C9C"
	},
	Clear: {
		title: "It's Amazing",
		subtitle: "Rock that shit!",
		highlight: "Enjoy",
		color: "#E32500",
		background: "#FFD017"
	},
	Rain: {
		title: "Rain rain please go away",
		subtitle: "Stay inside and code all day",
		highlight: "away",
		color: "#004A96",
		background: "#2F343A"
	},
	Thunderstorm: {
		title: "Watch out, Thunder Strike",
		subtitle: "Unplug those devices",
		highlight: "Thunder",
		color: "#FBFF46",
		background: "#020202"
	},
	Clouds: {
		title: "Cloud storage limit reached",
		subtitle: "error: 5000 - cirrocumulus",
		highlight: "limit",
		color: "#0044FF",
		background: "#939393"
	},
	Snow: {
		title: "of course it's snowing",
		subtitle: "You're not supposed to eat it",
		highlight: "Snow",
		color: "#021D4C",
		background: "#15A678"
	},
	Drizzle: {
		title: "Meh... don't even ask",
		subtitle: "What did I just say?",
		highlight: "don't",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
	Mist: {
		title: "Mist",
		subtitle: "Mist !",
		highlight: "Mist",
		color: "#B3F6E4",
		background: "#1FBB68"
	},
}

const allStyles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:`#FFD017`
},
iconStyle:{
fontSize: 90,
color: 'white',
marginBottom: -80

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
  fontSize:55,
  color:'white',
  marginBottom: -80
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
