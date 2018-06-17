import React from 'react';
import {createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import HourlyForcastList from '../screens/HourlyForcastList';

export const Tab = createBottomTabNavigator (
    {
        Home: {screen: Home},
        HourlyForcastList: {screen: HourlyForcastList},
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'md-home';
                } else if (routeName === 'HourlyForcastList') {
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