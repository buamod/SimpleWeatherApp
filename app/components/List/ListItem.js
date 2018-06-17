import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

/*TODO: move iconNames to common file */
const iconNames = {
	Default: 'md-time',
	Clear: 'md-sunny',
	Rain: 'md-rainy',
	Thunderstorm: 'md-thunderstorm' ,
	Clouds: 'md-cloudy' ,
	Snow: 'md-snow' ,
	Drizzle: 'md-umbrella' ,
	Mist: 'md-partly-sunny'
}

const ListItem = ({ hour, weatherCond, temp }) => (
    <View style={styles.container}>
        <Text style={styles.hourText}>
            {hour}
        </Text>
        <View style={styles.weatherContainer}>
            <Icon name={iconNames[weatherCond]}  style= {styles.icon}> </Icon>
            <Text style={styles.tempText}>
                {temp}°
            </Text>
        </View>
    </View>
);

ListItem.propTypes = {
    hour: PropTypes.string,
    weatherCond: PropTypes.string,
    temp: PropTypes.string,
};

export default ListItem;