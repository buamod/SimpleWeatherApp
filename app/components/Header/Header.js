import React, {PropTypes} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header= ({ cityName, onMenuButtonPress, onInfoButtonPress })=> (
  <View style= {styles.container}>
    <TouchableOpacity style= {styles.leftButton} onPress= {onMenuButtonPress}>
      <Icon name={'md-menu'}  style= {styles.icon}> </Icon>
    </TouchableOpacity>
    <View style= {styles.headline}>
      <Text style= {styles.cityName}>
        {cityName}
      </Text>
      <Text style= {styles.date}>
        Default Date
      </Text>
    </View>
    <TouchableOpacity style= {styles.rightButton} onPress= {onInfoButtonPress}>
      <Icon name={'md-information-circle'}  style= {styles.icon}> </Icon>
    </TouchableOpacity>
  </View>
);

Header.PropTypes={
    cityName: PropTypes.string,
    onMenuButtonPress: PropTypes.func,
    onInfoButtonPress: PropTypes.func,
};

export default Header;