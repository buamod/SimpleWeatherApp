import React, {PropTypes} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

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

const CurrentWeather= ({weatherCond, temp, minTemp, maxTemp, humidity, windSpeed, lastUpdatedTime})=> (
  <View style= {styles.container}>
    <View style= {styles.iconWeatherCondContainer}>
      <Icon name={iconNames[weatherCond]}  style= {styles.icon}> </Icon>
      <Text style= {styles.weatherCond}>
        {weatherCond}
      </Text>
    </View>
    <Text style= {styles.tempNumber}>
      {temp}°
    </Text>
  </View>
);

CurrentWeather.PropTypes= {
  weatherCond: PropTypes.string,
  temp: PropTypes.string,
  minTemp: PropTypes.string,
  maxTemp: PropTypes.string,
  humidity: PropTypes.string,
  windSpeed: PropTypes.string,
  lastUpdatedTime: PropTypes.string,
};

export default CurrentWeather;