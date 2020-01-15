import React from 'react';
import { View, StyleSheet } from 'react-native';

const FormContainer = ({ children, style, ...props }) => {
  return <View style={{ ...styles.form, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  form: {
    width: '80%',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center'
  }
});

export default FormContainer;
