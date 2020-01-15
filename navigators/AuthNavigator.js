import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Image, Platform } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import NewAccountScreen from '../screens/NewAccountScreen';

import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const AuthNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    NewAccount: NewAccountScreen
  },
  {
    initialRouteName: 'NewAccount',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: Colors.secondaryColor,
      headerBackTitle: null,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: 163
      },
      headerLeftContainerStyle: {
        alignItems: 'flex-start'
      },
      headerBackImage: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Back"
            iconName={
              Platform.OS === 'android' ? 'md-close-circle-outline' : 'ios-close-circle-outline'
            }
          />
        </HeaderButtons>
      ),
      headerBackground: (
        <Image
          source={require('../assets/images/defaultHeaderAuth.png')}
          style={{ width: '100%', height: '100%', marginTop: -1 }}
          resizeMode="stretch"
        />
      )
    }
  }
);

export default AuthNavigator;
