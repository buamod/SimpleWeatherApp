import React from 'react';
import {createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import HourlyForcast from '../screens/HourlyForcast';

export const Tab = createBottomTabNavigator ({
    Home: {screen: Home},
    HourlyForcast: {screen: HourlyForcast},
});