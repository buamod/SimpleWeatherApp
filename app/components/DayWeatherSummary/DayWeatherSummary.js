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

const DayWeatherSummary= ({day, weatherCond, minTemp, maxTemp})=> (
    <View style= {styles.container}>
        <Text style= {styles.day}>
            {day}
        </Text>
        <Icon name={iconNames[weatherCond]}  style= {styles.icon}> </Icon>
        <View style= {styles.minMaxTempsContainer}>
            <Text style= {styles.subText}>
                Min: {minTemp}°
            </Text>
            <Text style= {styles.subText}>
                Max: {maxTemp}°
            </Text>
        </View>
    </View>
);

DayWeatherSummary.PropTypes= {
    day: PropTypes.string,
    weatherCond: PropTypes.string,
    minTemp: PropTypes.string,
    maxTemp: PropTypes.string,
};

export default DayWeatherSummary;