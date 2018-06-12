import React, {PropTypes} from 'react';
import { ScrollView, Image } from 'react-native';

import styles from './styles';

const Container= ({ children })=>(
    <ScrollView style= {styles.container}>
      <Image 
        source= {require('./images/background.jpg')}
        resizeMode= 'cover'
        style={styles.backgroundImage}
      >
        {children}
      </Image>
    </ScrollView>
);

Container.PropTypes= {
  children: PropTypes.any,
};

export default Container;