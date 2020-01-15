import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';

import Input from './Input';

import Colors from '../constants/Colors';

const DatePicker = ({ value, onDateChange, setFieldTouched }) => {
  const [pickerVisible, setPickerVisible] = useState(false);

  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const handleDateChange = date => {
    onDateChange(date);
    setPickerVisible(false);
  };

  const handleCancel = () => {
    setFieldTouched('birthdate', true);
    setPickerVisible(false);
  };

  return (
    <>
      <Touchable
        onPress={() => {
          setPickerVisible(true);
        }}
      >
        <View style={styles.container}>
          <Ionicons
            style={styles.icon}
            name={Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}
            size={32}
            color={Colors.primaryColor}
          />
          <Input style={styles.input} placeholder="Birthdate" editable={false} value={value} />
        </View>
      </Touchable>
      <DateTimePicker
        isVisible={pickerVisible}
        onConfirm={handleDateChange}
        onCancel={handleCancel}
        maximumDate={new Date()}
        mode="date"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%'
  },
  icon: {
    width: '10%'
  },
  input: {
    width: '90%',
    marginLeft: 5
  }
});

export default DatePicker;
