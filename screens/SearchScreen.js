import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const SearchScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} />
            <Ionicons
              style={styles.icon}
              name={Platform.OS === 'android' ? 'md-search' : 'ios-search'}
              size={25}
              color={Colors.secondaryColor}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  searchSection: {
    width: '100%',
    height: '10%',
    marginTop: 25,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    height: 40,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 10,
    color: '#FFF'
  },
  icon: {
    padding: 5
  }
});

export default SearchScreen;
