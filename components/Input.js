import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const CustomInput = ({ style, ...props }) => {
  return (
    <View style={{ ...styles.inputContainer, ...style }}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
  },
  input: {
    flex: 1
  }
});

export default CustomInput;
