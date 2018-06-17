import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  RefreshControl,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { DeveloperInfo } from '../components/DeveloperInfo';

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
            <Text>
              Hourly Forcast
            </Text>
          </ScrollView>
        </Container>
    );
  }
}

export default HourlyForcast;