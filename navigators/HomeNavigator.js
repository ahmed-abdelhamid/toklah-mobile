import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import MainScreen from '../screens/MainScreen';
import EventsScreen from '../screens/EventsScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

import Colors from '../constants/Colors';

const HomeNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Events: EventsScreen,
    EventDetail: EventDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: Colors.secondaryColor,
      headerLeftContainerStyle: {
        marginBottom: 15
      },
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerBackground: (
        <Image
          source={require('../assets/images/headerBackground.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="stretch"
        />
      )
    }
  }
);

export default HomeNavigator;
