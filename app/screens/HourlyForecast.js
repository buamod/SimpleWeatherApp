import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  StatusBar,
  Text,
  RefreshControl,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ListItem, Separator } from '../components/List';
import { simWeatherData, defaultHourlyForecast, defaultSettingsData } from '../data/data';

import { updateForecast } from '../actions/forecast';

const tempKToCelsius= (tempK)=> {
  return (tempK - 273.15).toFixed(0);
}

class HourlyForecast extends Component {
  static propTypes= {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
    cityName: PropTypes.string,
    timeOfCalculation: PropTypes.string,
    hourForcastList: PropTypes.arrayOf(PropTypes.object),
  };

  componentWillMount(){
    this._onRefresh();
  };

  componentDidMount(){
  };

  _onRefresh=()=> {
    console.log('Screen refreshed');
    this.props.dispatch(updateForecast());
  }

  handleMenuButtonPress= ()=>{
    console.log('Menu button pressed');
    const settingsData = defaultSettingsData;
    this.props.navigation.navigate('Settings', {settingsData});
  }

  render() {
    return(
        <Container>
          <StatusBar translucent={false} barStyle='light-content'/>
          <Header
              cityName= {this.props.cityName}
              date = {this.props.timeOfCalculation}
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
            <FlatList
              data={this.props.hourForcastList}
              renderItem={({ item }) => (
                <ListItem
                  time={item.time}
                  weatherCond={item.weatherCond}
                  temp={item.temp}
                />
              )}
              keyExtractor={item => item.time}
              ItemSeparatorComponent={Separator}
            />
          </ScrollView>
        </Container>
    );
  }
}

const mapStateToProps= (state)=>{
  const forecastDataList= state.forecast.data.list;
  const MAX_LIST_LENGTH = 24;//for three days forecast
  //const listLength= forecastDataList.length;
  let hourForcastList = []
  for (var i= 0; i< MAX_LIST_LENGTH; i++){
    hourForcastList.push({
      time: forecastDataList[i].dt_txt ||'',
      weatherCond: forecastDataList[i].weather[0].main ||'',
      temp: (tempKToCelsius(forecastDataList[i].main.temp)).toString()||'',
    });
  }
  return {
    isFetching: state.forecast.isFetching,
    cityName: state.forecast.data.city.name || '',
    timeOfCalculation: '',
    hourForcastList,

  }

  return {
      isFetching: state.forecast.isFetching,
  }
};

export default connect(mapStateToProps)(HourlyForecast);