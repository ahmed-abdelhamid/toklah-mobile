import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

import Colors from '../constants/Colors';

const AutoCompleteInput = ({ onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <Autocomplete
        containerStyle={styles.autocompletContainer}
        inputContainerStyle={styles.inputContainer}
        listContainerStyle={styles.listContainer}
        style={styles.input}
        keyExtractor={item => item}
        onChangeText={onChangeText}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onChangeText(item)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40
  },
  autocompletContainer: Platform.select({
    ios: {
      width: '100%'
    },
    android: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 1,
      width: '100%'
    }
  }),
  inputContainer: {
    borderWidth: 0,
    height: 40
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    height: '100%',
    marginBottom: 10
  },
  listContainer: {
    marginTop: 0
  },
  text: {
    margin: 5
  }
});

export default AutoCompleteInput;
