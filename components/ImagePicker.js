import React from 'react';
import { View, Text, Image, StyleSheet, Platform, ALert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Button from '../components/CustomButton';

import Colors from '../constants/Colors';

const CameraIcon = () => (
  <Ionicons
    style={{ marginRight: 5 }}
    name={Platform.OS === 'android' ? 'md-camera' : 'ios-camera'}
    size={25}
    color={Colors.secondaryColor}
  />
);

const CustomImagePicker = ({ value, setImageValue, setFieldTouched }) => {
  const openImagePicker = async () => {
    if (Platform.OS === 'ios') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        ALert.alert('Permissions Error', 'This app requires permission to your gallery', [
          { text: 'OK' }
        ]);
      }
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    });

    if (image.cancelled) {
      setFieldTouched('image', true);
    }

    if (!image.cancelled) {
      setImageValue(image.uri);
    }
  };

  const renderImagePreview = () => {
    if (value) {
      return <Image source={{ uri: value }} style={styles.image} />;
    }

    return <Text style={styles.text}>No Image Selected</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>{renderImagePreview()}</View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} Icon={CameraIcon} onPress={openImagePicker}>
          Choose an image
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  imagePreview: {
    width: 150,
    height: 150,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    textAlign: 'center'
  },
  buttonContainer: {
    paddingVertical: 10,
    marginLeft: 5,
    width: '100%'
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'center'
  }
});

export default CustomImagePicker;
