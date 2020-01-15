import React from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';

const CheckboxGroup = ({ title, options, setFieldValue, ...props }) => {
  const renderOptions = () =>
    options.map(({ name, label, value }) => (
      <View key={label} style={styles.switchContainer}>
        <Switch value={value} onValueChange={value => setFieldValue(name, value)} {...props} />
        <Text style={styles.switchLabel}>{label}</Text>
      </View>
    ));

  return (
    <View style={styles.container}>
      {title && <Text>{title}</Text>}
      <View style={styles.switchsContainer}>{renderOptions()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10
  },
  switchsContainer: {
    width: '90%',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchLabel: Platform.select({
    ios: {
      marginLeft: 5
    }
  })
});

export default CheckboxGroup;
