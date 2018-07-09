import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {DayWeatherSummary} from '../DayWeatherSummary';

import styles from './styles';

const Forcast= ({tomorrow, afterTomorrow, afterAfterTomorrow})=> (
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

Forcast.PropTypes= {
    tomorrow: PropTypes.any,
    afterTomorrow: PropTypes.any,
    afterAfterTomorrow: PropTypes.any,
};
export default Forcast;

/*


        day= {tomorrow['day']}
        weatherCond= {tomorrow['weatherCond']}
        minTemp= {tomorrow['minTemp']}
        maxTemp= {tomorrow['maxTemp']}

    <DayWeatherSummary
        day= {forcastSummary[1].day}
        weatherCond= {forcastSummary[1][weatherCond]}
        minTemp= {forcastSummary[1][minTemp]}
        maxTemp= {forcastSummary[1][maxTemp]}
    />
    <DayWeatherSummary
        day= {forcastSummary[2].day}
        weatherCond= {forcastSummary[2][weatherCond]}
        minTemp= {forcastSummary[2][minTemp]}
        maxTemp= {forcastSummary[2][maxTemp]}
    />
*/