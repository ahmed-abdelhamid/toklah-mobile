import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    marginTop: -9
  },
  text: {
    fontSize: 10,
    color: 'red'
  }
});

export default ErrorMessage;
