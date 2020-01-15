import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomInput from '../components/Input';
import CustomButton from '../components/CustomButton';
import FormContainer from '../components/FormContainer';
import Footer from '../components/AuthFooter';

import Colors from '../constants/Colors';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <FormContainer>
          <CustomInput placeholder="Email or Mobile No." />
          <CustomInput placeholder="Password" secureTextEntry />
          <CustomButton style={styles.button} onPress={() => navigation.navigate('App')}>
            Login
          </CustomButton>
        </FormContainer>
        <View style={styles.linksContainer}>
          <CustomButton style={styles.link} titleStyle={styles.linkTitle}>
            Forgot Your Password?
          </CustomButton>
          <CustomButton
            style={styles.link}
            titleStyle={styles.linkTitle}
            onPress={() => {
              navigation.navigate('NewAccount');
            }}
          >
            Register New Account?
          </CustomButton>
          <CustomButton style={styles.link} titleStyle={styles.linkTitle}>
            Are You Organizational Company?
          </CustomButton>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerStyle: {
    height: 335,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0
  },
  headerBackground: (
    <View style={{ marginTop: -1 }}>
      <Image source={require('../assets/images/upperBackgroundAuth.png')} />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    alignItems: 'center'
  },
  button: {
    width: '80%'
  },
  link: {
    backgroundColor: 'transparent',
    color: Colors.primaryColor,
    paddingVertical: 0,
    marginTop: 5
  },
  linkTitle: {
    color: Colors.primaryColor,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primaryColor
  }
});

export default LoginScreen;
