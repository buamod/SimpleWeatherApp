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
import { connectAlert } from '../components/Alert';

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
    currentWeatherError: PropTypes.string,
    alertWithType: PropTypes.func,
  };

  componentWillMount(){
    this._onRefresh();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentWeatherError && !this.props.currentWeatherError) {
      this.props.alertWithType('error', 'Error', nextProps.currentWeatherError);
    }
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
      currentWeatherError: state.currentWeather.error,
  }
};

export default connect(mapStateToProps)(connectAlert(Home));