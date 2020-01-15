import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';

const MainButton = ({ children, onPress }) => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View style={styles.container}>
      <Touchable style={styles.touchable} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.title}>{children}</Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    overflow: 'hidden',
    borderRadius: 100,
    height: 200,
    width: 200
  },
  touchable: {
    flex: 1
  },
  button: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    marginBottom: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: Colors.secondaryColor,
    textTransform: 'uppercase'
  }
});

export default MainButton;
