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
import defaultHourlyForcast from '../data/weatherData';

class HourlyForcast extends Component {
  componentWillMount(){
    this.state = {
      refreshing: false,
    }
  };

  componentDidMount(){
  };

  _onRefresh=()=> {
    console.log('Screen refreshed');
    this.setState({
      ...this.state,
      refreshing: true,
    });

    this.setState({
      ...this.state,
      refreshing: false,
    });
  }

  render() {
    return(
        <Container>
          <StatusBar translucent={false} barStyle='light-content'/>
          <Header
              cityName= {'Unknown'}
              date = {'Default Date'}
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