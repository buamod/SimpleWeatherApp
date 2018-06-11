import React, {PropTypes} from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

const Container= ({ children })=>(
    <View style= {styles.container}>
      {children}
    </View>
);

Container.PropTypes= {
  children: PropTypes.any,
};

export default Container;