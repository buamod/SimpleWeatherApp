import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';

import styles from './styles';

const Container= ({ children })=>(
    <View style= {styles.container}>
      <ImageBackground 
        source= {require('./images/background.jpg')}
        resizeMode= 'cover'
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
);

Container .PropTypes= {
  children: PropTypes.any,
};

export default Container;