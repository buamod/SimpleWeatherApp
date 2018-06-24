import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { CurrentWeather } from '../components/CurrentWeather';
//import { Forecast } from '../components/Forecast';
import { updateCurrentWeather } from '../actions/currentWeather';
import { 
  simWeatherData, 
  initialWeatherData, 
  defaultSettingsData,
} from '../data/data';

import {fetchWeather} from '../weatherAPI'

const tempKToCelsius= (tempK)=> {
  return (tempK - 273.15).toFixed(0);
}

class Home extends Component {
  static propTypes= {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    cityName: PropTypes.string,
    timeOfCalculation: PropTypes.string,
    weatherCond: PropTypes.string,
    weatherDesc: PropTypes.string,
    temp: PropTypes.string,
    minTemp: PropTypes.string,
    maxTemp: PropTypes.string,
    humidity: PropTypes.string,
    windSpeed: PropTypes.string,
    lastUpdatedTime: PropTypes.string,
  };

  componentWillMount(){
    this._onRefresh();
  };

  componentDidMount(){
  };

  _onRefresh=()=> {
    console.log('Screen refreshed');
    this.props.dispatch(updateCurrentWeather());
  }

  handleMenuButtonPress= ()=>{
    console.log('Menu button pressed');
    this.props.navigation.navigate('Settings');
  }

  render() {
    return(
        <Container>
          <StatusBar translucent={false} barStyle='light-content'/>
          <Header
            cityName= {this.props.cityName}
            date= {this.props.timeOfCalculation}
            onMenuButtonPress= {this.handleMenuButtonPress}
          />
          <ScrollView
            refreshControl= {
              <RefreshControl
                refreshing={this.props.isFetching}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <CurrentWeather
              weatherCond= {this.props.weatherCond}
              weatherDesc= {this.props.weatherDesc}
              temp= {this.props.temp}
              minTemp= {this.props.minTemp}
              maxTemp= {this.props.maxTemp}
              humidity= {this.props.humidity}
              windSpeed= {this.props.windSpeed}
              lastUpdatedTime= {this.props.lastUpdatedTime}
            />
          </ScrollView>
        </Container>
    );
  }
}

/*TODO: add back 3 days forecast summary components to render function */

const mapStateToProps= (state)=>{
  const currentWeatherData= state.currentWeather.data;
  return {
      isFetching: state.currentWeather.isFetching || false,
      cityName: currentWeatherData.name || '',
      timeOfCalculation: new Date((currentWeatherData.dt)*1000).toString().split(" ", 4).join(" ") || '',
      weatherCond: currentWeatherData.weather[0].main ||'',
      weatherDesc: currentWeatherData.weather[0].description ||'',
      temp: (tempKToCelsius(currentWeatherData.main.temp)).toString()||'',
      minTemp: (tempKToCelsius(currentWeatherData.main.temp_min)).toString()||'',
      maxTemp: (tempKToCelsius(currentWeatherData.main.temp_max)).toString()||'',
      humidity: (currentWeatherData.main.humidity).toString()||'',
      windSpeed:(currentWeatherData.wind.speed).toString()||'',
      lastUpdatedTime: state.currentWeather.lastUpdatedTime.toString().split(" ", 5).join(" ")||'',
  }
};

export default connect(mapStateToProps)(Home);

/*

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
    alignItems:'flex-start', //horizontal
    justifyContent:'center', //vertical
    flex:1,
    backgroundColor: 3007,
    flexDirection:'column'
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
    marginLeft: 30,
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
  dateTimeStyle:{
    textAlign: 'left',
    fontFamily:'HelveticaNeue-Bold',
    fontSize:12,
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
  btnImgStyle:{
    flex: 1,
    alignItems: 'flex-start',
    width: 50,
    height: 50,
    resizeMode:'contain',
    justifyContent: 'flex-start',
    marginLeft: 30,
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
    fontSize:14,
    color:3007,
    //marginLeft:-40
  }
})
*/