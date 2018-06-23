import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  RefreshControl,
  FlatList,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { ListItem, Separator } from '../components/List';
import { simData, defaultHourlyForcast, defaultSettingsData } from '../data/data';

import { updateForcast } from '../actions/currentWeather';

class HourlyForcast extends Component {
  componentWillMount(){
    this.state = {
      refreshing: false,
    }
  };

  componentDidMount(){
  };


  getForcast(){
    /*Should return null in failure case */

    //for now, return simulation forcast data object
    return simData.weather.forcast;
    /*TODO: Fetch weather data from API*/
  };

  _onRefresh=()=> {
    console.log('Screen refreshed');
    this.setState({
      ...this.state,
      refreshing: true,
    });
    newForcastDtata= this.getForcast()
    if (newForcastDtata != null){
      // TODO: Dispatch this action to redux
      console.log(updateForcast(newForcastDtata));
      this.setState({
        ...this.state,
        refreshing: false,
      });
    } else{
      /*TODO: log an alert using AlertProvider*/
      this.setState({
        ...this.state,
        refreshing: false,
      });
    }
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
              cityName= {'Unknown'}
              date = {'Default Date'}
              onMenuButtonPress= {this.handleMenuButtonPress}
          />
          <ScrollView
            refreshControl= {
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <FlatList
              data={defaultHourlyForcast}
              renderItem={({ item }) => (
                <ListItem
                  hour={item.hour}
                  weatherCond={item.weatherCond}
                  temp={item.temp}
                />
              )}
              keyExtractor={item => item.hour}
              ItemSeparatorComponent={Separator}
            />
          </ScrollView>
        </Container>
    );
  }
}

export default HourlyForcast;