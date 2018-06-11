import React, {PropTypes} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const Header= ({ cityName, onPress })=> (
  <View style= {styles.container}>
    <Text style= {styles.cityName}>
      {cityName}
    </Text>
    <TouchableOpacity style= {styles.button} onPress= {onPress}>
      <Image resizeMode= 'contain' style= {styles.icon} source= {require('./images/gear.png')}/>
    </TouchableOpacity>

  </View>
);

Header.PropTypes={
    cityName: PropTypes.string,
    onPress: PropTypes.func,
};

export default Header;