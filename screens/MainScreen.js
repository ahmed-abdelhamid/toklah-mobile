import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainButton from '../components/MainButton';

const MainScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Events');
  };

  return (
    <View style={styles.container}>
      <MainButton onPress={handlePress}>Organizer</MainButton>
      <MainButton onPress={handlePress}>Volunteer</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MainScreen;
