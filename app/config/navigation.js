import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import HourlyForcast from '../screens/HourlyForcast';
import Settings from '../screens/Settings';
import LocationSettings from '../screens/LocationSettings';

export const Tabs = createBottomTabNavigator (
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

export const SettingsStack = createStackNavigator(
    {
        SettingsRoot: {
            screen: Settings,
        },
        LocationSettings: {
            screen: LocationSettings,
        }
    },
    {

    }
);

export const RootStack = createStackNavigator(
    {
        Tabs: {
            screen: Tabs,
        },
        Settings: {
            screen: SettingsStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);