import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { DeveloperInfo } from '../components/DeveloperInfo';

class HourlyForcast extends Component {
  componentWillMount(){
    this.state = {
      isDevInfoVisible: false,
    }
  };

  componentDidMount(){
  };

  handleMenuPress= ()=> {
    console.log('Menu button pressed');
  };

  handleInfoPress= ()=> {
    console.log('Info button pressed');
    this.showDevInfo();
  };

  _setDevInfoVisibility= (visible)=>{
    this.setState({
      ...this.state,
      isDevInfoVisible: visible,
    });
  };

  showDevInfo= ()=>{
    console.log('Will show developer info');
    this._setDevInfoVisibility(true);
  };

  handleExitDevInfo= ()=>{
    console.log('Will hide developer info');
    this._setDevInfoVisibility(false);
  };

  render() {
    return(
      <ScrollView>
        <Container>
          <StatusBar translucent={false} barStyle='light-content'/>
          <Header
            cityName= {'Unknown'}
            onMenuButtonPress= {this.handleMenuPress}
            onInfoButtonPress= {this.handleInfoPress}
          />
          <DeveloperInfo
            visible= {this.state.isDevInfoVisible}
            onExitButtonPress= {this.handleExitDevInfo}
          />
          <Text>
            Hourly Forcast
          </Text>
        </Container>
      </ScrollView>
    );
  }
}

export default HourlyForcast;