import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {DayWeatherSummary} from '../DayWeatherSummary';

import styles from './styles';

const Forecast= ({tomorrow, afterTomorrow, afterAfterTomorrow})=> (
  <View style= {styles.container}>
    <DayWeatherSummary
        day= {tomorrow['day']}
        weatherCond= {tomorrow['weatherCond']}
        minTemp= {tomorrow['minTemp']}
        maxTemp= {tomorrow['maxTemp']}
    />
    <DayWeatherSummary
        day= {afterTomorrow['day']}
        weatherCond= {afterTomorrow['weatherCond']}
        minTemp= {afterTomorrow['minTemp']}
        maxTemp= {afterTomorrow['maxTemp']}
    />
    <DayWeatherSummary
        day= {afterAfterTomorrow['day']}
        weatherCond= {afterAfterTomorrow['weatherCond']}
        minTemp= {afterAfterTomorrow['minTemp']}
        maxTemp= {afterAfterTomorrow['maxTemp']}
    />
  </View>
);

Forecast.PropTypes= {
    tomorrow: PropTypes.any,
    afterTomorrow: PropTypes.any,
    afterAfterTomorrow: PropTypes.any,
};
export default Forecast;

/*


        day= {tomorrow['day']}
        weatherCond= {tomorrow['weatherCond']}
        minTemp= {tomorrow['minTemp']}
        maxTemp= {tomorrow['maxTemp']}

    <DayWeatherSummary
        day= {forecastSummary[1].day}
        weatherCond= {forecastSummary[1][weatherCond]}
        minTemp= {forecastSummary[1][minTemp]}
        maxTemp= {forecastSummary[1][maxTemp]}
    />
    <DayWeatherSummary
        day= {forecastSummary[2].day}
        weatherCond= {forecastSummary[2][weatherCond]}
        minTemp= {forecastSummary[2][minTemp]}
        maxTemp= {forecastSummary[2][maxTemp]}
    />
*/