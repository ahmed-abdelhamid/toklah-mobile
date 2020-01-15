import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AuthFooter = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/images/lowerBackgroundAuth.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'flex-end'
  }
});

export default AuthFooter;
