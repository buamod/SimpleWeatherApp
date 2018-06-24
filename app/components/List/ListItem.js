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

const mapWeatherCondToIconName= (weatherCond)=>{
  if (iconNames.hasOwnProperty(weatherCond)){
    return iconNames[weatherCond];
  } else{
    return 'md-help'
  }
}

const ListItem = ({ time, weatherCond, temp }) => (
    <View style={styles.container}>
        <View style={styles.timeContainer}>
            <Text style={styles.hourText}>
                {time.substring(11, 16)}
            </Text>
            <Text style={styles.dateText}>
                {time.substring(0, 10)}
            </Text>
        </View>
        <View style={styles.weatherContainer}>
            <Icon 
                name={mapWeatherCondToIconName(weatherCond)}
                size={styles.icon.fontSize}  
                style= {styles.icon}
            />
            <Text style={styles.tempText}>
                {temp}°
            </Text>
        </View>
    </View>
);

ListItem.propTypes = {
    time: PropTypes.string,
    weatherCond: PropTypes.string,
    temp: PropTypes.string,
};

export default ListItem;