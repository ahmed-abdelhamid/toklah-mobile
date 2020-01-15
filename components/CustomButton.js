import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  ActivityIndicator,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';

const CustomButton = ({ style, titleStyle, Icon, isLoading, ...props }) => {
  const Touchable =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color={Colors.secondaryColor} />;
    }

    return (
      <>
        {Icon && <Icon style={styles.icon} />}
        <Text style={{ ...styles.buttonTitle, ...titleStyle }}>{props.children}</Text>
      </>
    );
  };

  return (
    <Touchable {...props}>
      <View style={{ ...styles.button, ...style }}>{renderContent()}</View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    textTransform: 'uppercase',
    color: Colors.secondaryColor
  }
});

export default CustomButton;
