import React from 'react';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';
import ComplaintNavigator from './ComplaintNavigator';

import Colors from '../constants/Colors';

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Complaints: {
      screen: ComplaintNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-document' : 'ios-document'}
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    activeColor: Colors.secondaryColor,
    inactiveColor: '#FFF',
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  }
);

export default AppNavigator;
