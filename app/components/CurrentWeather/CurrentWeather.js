import React from 'react';
import PropTypes from 'prop-types';
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

const mapWeatherCondToIconName= (weatherCond)=>{
  if (iconNames.hasOwnProperty(weatherCond)){
    return iconNames[weatherCond];
  } else{
    return 'md-help'
  }
}
const CurrentWeather= ({weatherCond, weatherDesc, temp, minTemp, maxTemp, humidity, windSpeed, lastUpdatedTime})=> (
  <View style= {styles.container}>
    <View style= {styles.iconWeatherCondContainer}>
      <Icon 
        name={mapWeatherCondToIconName(weatherCond)}
        size={styles.icon.fontSize}
        style= {styles.icon}
      />
      <Text style= {styles.weatherDesc}>
        {weatherDesc}
      </Text>
    </View>
    <Text style= {styles.tempNumber}>
      {temp}°
    </Text>
    <View style= {styles.subWeatherDetailsContainer}>
      <View style= {styles.twoTextsCol}>
        <Text style= {styles.subText}>
          Min: {minTemp}°
        </Text>
        <Text style= {styles.subText}>
          Max: {maxTemp}°
        </Text>
      </View>
      <View style= {styles.twoTextsCol}>
        <Text style= {styles.subText}>
          Humidity: {humidity}%
        </Text>
        <Text style= {styles.subText}>
          Wind Speed: {windSpeed} m/s
        </Text>
      </View>
    </View>
    <Text style= {styles.lastUpdatedText}>
      Last Updated: {lastUpdatedTime}
    </Text>
  </View>
);

CurrentWeather.PropTypes= {
  weatherCond: PropTypes.string,
  weatherDesc: PropTypes.string,
  temp: PropTypes.string,
  minTemp: PropTypes.string,
  maxTemp: PropTypes.string,
  humidity: PropTypes.string,
  windSpeed: PropTypes.string,
  lastUpdatedTime: PropTypes.string,
};

export default CurrentWeather;