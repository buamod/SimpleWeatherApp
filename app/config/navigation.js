import React from 'react';
import {createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import HourlyForcast from '../screens/HourlyForcast';

export const Tab = createBottomTabNavigator (
    {
        Home: {screen: Home},
        HourlyForcast: {screen: HourlyForcast},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'md-home';
                } else if (routeName === 'HourlyForcast') {
                    iconName = 'md-time';
                }
                return <Ionicons name={iconName} size={30} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: 'white',
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    }
);