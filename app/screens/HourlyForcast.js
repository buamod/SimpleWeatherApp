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
import { simWeatherData, defaultHourlyForcast, defaultSettingsData } from '../data/data';

import { updateForcast } from '../actions/forcast';

class HourlyForcast extends Component {
  static propTypes= {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool,
  };

  componentWillMount(){
    this._onRefresh();
  };

  componentDidMount(){
  };

  _onRefresh=()=> {
    console.log('Screen refreshed');
    this.props.dispatch(updateForcast());
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
                refreshing={this.props.isFetching}
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

const mapStateToProps= (state)=>{
  return {
      isFetching: state.forcast.isFetching,
  }
};

export default connect(mapStateToProps)(HourlyForcast);