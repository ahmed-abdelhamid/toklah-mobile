import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const DropdownIcon = () => (
  <Ionicons
    name={Platform.OS === 'android' ? 'md-arrow-dropdown' : 'ios-arrow-dropdown'}
    size={25}
    color={Colors.primaryColor}
  />
);

const PickerSelect = ({ ...props }) => (
  <RNPickerSelect style={pickerSelectStyles} Icon={DropdownIcon} {...props} />
);

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    color: 'black',
    marginBottom: 10,
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    paddingRight: 30 // to ensure the text is never behind the icon
  },
  iconContainer: {
    top: 10,
    right: 12
  }
});

export default PickerSelect;
