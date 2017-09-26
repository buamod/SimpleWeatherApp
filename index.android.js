/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from './weatherAPI'
import Highlight from 'react-native-highlight-words'

const humedIconSource= 'http://www.icon2s.com/img256/256x256-black-white-android-humidity.png';
//TODO: replace the following link
const windIconSource= 'http://www.icon2s.com/img256/256x256-black-white-android-humidity.png';

export default class App extends Component {

  componentWillMount(){
  //  this.state = {hideStatusBar:false}
    this.state = {
      weather: 'Default',
      temp: '--',
      humidity: '--',
      pressure: '--',
      temp_min: '--',
      temp_max: '--',
      wind_speed: '--',
      city: 'Unknown City'
    }
  }

  componentDidMount(){
    this.getlocation()
  }

  getlocation(){
    navigator.geolocation.getCurrentPosition(
      (postData) => fetchWeather(postData.coords.latitude, postData.coords.longitude)
        .then (res => this.setState({
          weather: res.weather,
          temp: Math.round(toCelsius(Math.round(res.temp))),
          humidity: res.humidity,
          pressure: res.pressure,
          temp_min: Math.round(toCelsius(Math.round(res.temp_min))),
          temp_max: Math.round(toCelsius(Math.round(res.temp_max))),
          wind_speed: res.wind_speed,
          city: res.city
        })),
      (error) => alert(error),
      {timeout:10000}
    )
  }

  //currentPositionOnSuccess(data){

  //}

  render() {
    return(
      <View style={[allStyles.container, {backgroundColor:phrases[this.state.weather].background}]}>
        <StatusBar hidden={true}/>

        <View style= {allStyles.cityHeaderStyle}>
          <Text style = {allStyles.cityNameStyle}> City: {this.state.city} </Text>
        </View>

        <View style={allStyles.tempHeaderStyle}>
          <Icon  name={iconNames[this.state.weather]} style={allStyles.iconStyle}/>
          <Text style={allStyles.temp}> {this.state.temp}° </Text>
        </View>

        <View style={allStyles.subDetailsHeaderStyle}>
          <View style={allStyles.twoSeparatViewsInRowStyle}>
            <View style={allStyles.twoAdjacentViewsInRowStyle}>
              <Image source={{uri:humedIconSource}} style={allStyles.subDetailsImgStyle}/>
              <Text style={allStyles.subDetails}> {this.state.humidity} </Text>
            </View>
            <View style={allStyles.twoAdjacentViewsInRowStyle}>
              <Text style={allStyles.subDetails}> Min: {this.state.temp_min}° </Text>
            </View>
          </View>

          <View style={allStyles.twoSeparatViewsInRowStyle}>
            <View style={allStyles.twoAdjacentViewsInRowStyle}>
              <Image source={{uri:windIconSource}} style={allStyles.subDetailsImgStyle}/>
              <Text style={allStyles.subDetails}> {this.state.wind_speed} </Text>
            </View>
            <View style={allStyles.twoAdjacentViewsInRowStyle}>
              <Text style={allStyles.subDetails}> Max: {this.state.temp_max}° </Text>
            </View>
          </View>
        </View>

        <View style={allStyles.bodyStyle}>
          <Image style={allStyles.bacgroundImgStyle}
            source={{uri: 'http://www.pngmart.com/files/3/Weather-PNG-Photos.png'}}
          >
          <Highlight
            style ={allStyles.title}
            highlightStyle={{color: phrases[this.state.weather].color}}
            searchWords={[phrases[this.state.weather].highlight]}
            textToHighlight={phrases[this.state.weather].title}
          />
          <Text style={allStyles.subTitle}>{phrases[this.state.weather].subtitle}</Text>
          </Image>
        </View>
      </View>
    );
  }
}

function toCelsius(k) {
  return k - 273.15
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
		title: "It's Amazing weather",
		subtitle: "Rock that shit!",
		highlight: "Enjoy the nice weather",
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
		title: "Sky is full of clouds",
		subtitle: "When clouds are dark, wait for the rain",
		highlight: "limit",
		color: "#0044FF",
		background: "#939393"
	},
	Snow: {
		title: "Of course it's snowing",
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
/*
const imageSources = {
  //All weather states have the same image for testing only
	Default: './weatherImages/default.jpg',
  Clear: './weatherImages/default.jpg',
  Rain: './weatherImages/default.jpg',
  Thunderstorm: './weatherImages/default.jpg',
  Clouds: './weatherImages/default.jpg',
  Snow: './weatherImages/default.jpg',
  Drizzle: './weatherImages/default.jpg',
  Mist: './weatherImages/default.jpg',
}
*/
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
  cityHeaderStyle:{
    //height: 40,
    alignItems:'center', //horizontal
    justifyContent:'flex-start', //vertical
    flex:1,
    backgroundColor: 3007,
    flexDirection:'row'
  },
  tempHeaderStyle:{
    alignItems:'center',
    justifyContent:'space-around',
    flex:1,
   // backgroundColor: 'red',
    flexDirection:'row'
  },
  twoSeparatViewsInRowStyle:{
    alignContent: 'stretch',
    alignItems:'baseline',
    justifyContent:'space-between',
    flex:1,
    //backgroundColor: 'green',
    flexDirection:'row'
  },
  twoAdjacentViewsInRowStyle:{
    //width: 100,
    alignItems:'center',
    justifyContent:'flex-start',
    flex:1,
    //backgroundColor: 'blue',
    flexDirection:'row',
    marginLeft: 20,
  },
  subDetailsHeaderStyle:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    flex:1,
    flexDirection:'column',
    marginTop: 60,
    //backgroundColor: 'red',
  },
  cityNameStyle:{
    textAlign: 'left',
    fontFamily:'HelveticaNeue-Bold',
    fontSize:20,
    color:'white',
    marginBottom: 0
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
  bacgroundImgStyle:{
    flex: 1,
    alignItems: 'center',
    resizeMode:'contain',
    justifyContent: 'center',
  },
  subDetailsImgStyle:{
    flex: 0.4,
    alignItems: 'flex-start',
    width: 30,
    height: 30,
    resizeMode:'contain',
    justifyContent: 'flex-start',
  },
  title:{
    fontFamily:'HelveticaNeue-Bold',
    alignItems:'center',
    fontSize:35,
    color:3007,
    marginTop:200,
  },
  subTitle:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'white',
    marginBottom:0
  },
  subDetails:{
    fontFamily:'HelveticaNeue-Medium',
    fontSize:20,
    color:'white',
    //marginLeft:-40
  }
})

AppRegistry.registerComponent('SimpleWeatherApp', () => App);
