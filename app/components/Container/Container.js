import React, {PropTypes} from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container= ({ children })=>(
    <View style= {styles.container}>
      <Image 
        source= {require('./images/background.jpg')}
        resizeMode= 'cover'
        style={styles.backgroundImage}
      >
        {children}
      </Image>
    </View>
);

Container .PropTypes= {
  children: PropTypes.any,
};

export default Container;