import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';

import SearchScreen from '../screens/SearchScreen';

const SearchNavigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    defaultNavigationOptions: {
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

export default SearchNavigator;
