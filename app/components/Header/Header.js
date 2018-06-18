import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { DeveloperInfo } from '../DeveloperInfo';
import styles from './styles';

class Header extends Component{
  static propTypes = {
    cityName: PropTypes.string,
    date: PropTypes.string,
    onMenuButtonPress: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      isDevInfoVisible: false,
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleInfoButtonPress= ()=> {
    console.log('Info button pressed');
    this.showDevInfo();
  };

  setDevInfoVisibility= (visible)=>{
    this.setState({
      isDevInfoVisible: visible,
    });
  };

  showDevInfo= ()=>{
    console.log('Will show developer info');
    this.setDevInfoVisibility(true);
  };

  handleExitDevInfo= ()=>{
    console.log('Will hide developer info');
    this.setDevInfoVisibility(false);
  };
  render(){
    return(
      <View style= {styles.container}>
        <TouchableOpacity style= {styles.leftButton} onPress= {this.props.onMenuButtonPress}>
          <Icon name={'md-menu'}  style= {styles.icon}> </Icon>
        </TouchableOpacity>
        <View style= {styles.headline}>
          <Text style= {styles.cityName}>
            {this.props.cityName}
          </Text>
          <Text style= {styles.date}>
          {this.props.date}
          </Text>
        </View>
        <TouchableOpacity style= {styles.rightButton} onPress= {this.handleInfoButtonPress}>
          <Icon name={'md-information-circle'}  style= {styles.icon}> </Icon>
        </TouchableOpacity>
        <DeveloperInfo
          visible= {this.state.isDevInfoVisible}
          onExitButtonPress= {this.handleExitDevInfo}
        />
      </View>
    );
  }
}

export default Header;