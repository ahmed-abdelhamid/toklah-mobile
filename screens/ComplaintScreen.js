import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableNativeFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const ComplaintScreen = () => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Please write your message here" multiline />
        </View>

        <Touchable>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Send</Text>
            <Ionicons
              style={styles.icon}
              name={Platform.OS === 'android' ? 'md-send' : 'ios-send'}
              color={Colors.secondaryColor}
              size={23}
            />
          </View>
        </Touchable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

ComplaintScreen.navigationOptions = {
  headerTitle: 'Complaints & Suggestions'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    height: '40%',
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    width: '100%',
    minHeight: 30,
    height: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 25,
    paddingVertical: 5,
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    textTransform: 'uppercase',
    fontSize: 15,
    color: Colors.secondaryColor
  },
  icon: {
    marginLeft: 10
  }
});

export default ComplaintScreen;
