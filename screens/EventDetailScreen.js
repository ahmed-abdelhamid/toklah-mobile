import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EventDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Event Detail Screen</Text>
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

export default EventDetailScreen;
