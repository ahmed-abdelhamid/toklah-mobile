import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import ComplaintScreen from '../screens/ComplaintScreen';

import Colors from '../constants/Colors';

const ComplaintNavigator = createStackNavigator(
  {
    Complaint: ComplaintScreen
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: 85
      },
      headerTintColor: Colors.secondaryColor,
      headerBackground: (
        <Image
          source={require('../assets/images/headerBackground2.png')}
          style={{ width: '100%', height: '100%', marginTop: -1 }}
          resizeMode="stretch"
        />
      )
    }
  }
);

export default ComplaintNavigator;
