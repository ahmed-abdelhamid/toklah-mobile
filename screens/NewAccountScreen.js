import React from 'react';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

import Input from '../components/Input';
import ErrorMessage from '../components/ErrorMessage';
import FormConatainer from '../components/FormContainer';
import DatePicker from '../components/DatePicker';
import PickerSelect from '../components/PickerSelect';
import CheckboxGroup from '../components/CheckboxGroup';
import ImagePicker from '../components/ImagePicker';
import Button from '../components/CustomButton';
import Footer from '../components/AuthFooter';

import { signupSchema } from '../helperFunctions/validationSchemas';
import Colors from '../constants/Colors';
import initialValues from '../constants/SignupForm';

const GENDER_SELECTIONS = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];

const NewAccountScreen = ({ navigation }) => {
  const handleSubmit = values => {
    console.log(values);
    // navigation.navigate('App');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="always"
          enableOnAndroid
          enableResetScrollToCoords
          extraScrollHeight={Platform.OS === 'android' ? 150 : 0}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              handleSubmit(values);
            }}
            validationSchema={signupSchema}
          >
            {props => {
              const TERMS = [
                {
                  name: 'terms',
                  label: 'Please Accept Terms & Conditions',
                  value: props.values.terms
                }
              ];
              const LANGUAGES = [
                { name: 'arabic', label: 'Arabic', value: props.values.arabic },
                { name: 'english', label: 'English', value: props.values.english }
              ];
              console.log(props.isSubmitting);
              return (
                <FormConatainer style={styles.formContainer}>
                  <Input
                    placeholder="Name"
                    value={props.values.name}
                    onChangeText={props.handleChange('name')}
                    onBlur={props.handleBlur('name')}
                  />
                  <ErrorMessage>{props.touched.name && props.errors.name}</ErrorMessage>
                  <Input
                    placeholder="Email"
                    value={props.values.email}
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                  />
                  <ErrorMessage>{props.touched.email && props.errors.email}</ErrorMessage>
                  <Input
                    placeholder="Mobile No."
                    keyboardType="phone-pad"
                    value={props.values.mobile}
                    onChangeText={props.handleChange('mobile')}
                    onBlur={props.handleBlur('mobile')}
                  />
                  <ErrorMessage>{props.touched.mobile && props.errors.mobile}</ErrorMessage>
                  <DatePicker
                    value={props.values.birthdate}
                    onDateChange={newDate => {
                      props.setFieldValue('birthdate', moment(newDate).format('DD MM YYYY'));
                    }}
                    setFieldTouched={props.setFieldTouched}
                  />
                  <ErrorMessage>{props.touched.birthdate && props.errors.birthdate}</ErrorMessage>
                  <PickerSelect
                    value={props.values.gender}
                    items={GENDER_SELECTIONS}
                    placeholder={{ label: 'Select a gender...', value: null }}
                    onValueChange={value => {
                      props.setFieldTouched('gender', true);
                      props.setFieldValue('gender', value);
                    }}
                  />
                  <ErrorMessage>{props.touched.gender && props.errors.gender}</ErrorMessage>
                  <Input
                    placeholder="City"
                    value={props.values.city}
                    onChangeText={props.handleChange('city')}
                    onBlur={props.handleBlur('city')}
                  />
                  <ErrorMessage>{props.touched.city && props.errors.city}</ErrorMessage>
                  <Input
                    placeholder="Occupation"
                    value={props.values.occupation}
                    onChangeText={props.handleChange('occupation')}
                  />
                  <Input
                    placeholder="Specialization"
                    value={props.values.specialization}
                    onChangeText={props.handleChange('specialization')}
                  />
                  <Input
                    placeholder="Education Degree"
                    value={props.values.education}
                    onChangeText={props.handleChange('education')}
                  />
                  <Input
                    placeholder="T-Shirt Size"
                    value={props.values.tshirtSize}
                    onChangeText={props.handleChange('tshirtSize')}
                  />
                  <Input
                    placeholder="IBAN No."
                    value={props.values.iban}
                    onChangeText={props.handleChange('iban')}
                  />

                  <CheckboxGroup
                    title="Languages"
                    options={LANGUAGES}
                    setFieldValue={props.setFieldValue}
                    trackColor={{ true: Colors.secondaryColor }}
                    thumbColor={Platform.select({ android: '#FFF' })}
                  />

                  <Input
                    placeholder="Skills"
                    value={props.values.skills}
                    onChangeText={props.handleChange('skills')}
                  />

                  <ImagePicker
                    value={props.values.image}
                    setImageValue={uri => props.setFieldValue('image', uri)}
                    setFieldTouched={props.setFieldTouched}
                  />
                  <ErrorMessage>{props.touched.image && props.errors.image}</ErrorMessage>
                  <Input
                    placeholder="Summary About Yourself"
                    multiline
                    textAlignVertical="top"
                    value={props.values.summary}
                    onChangeText={props.handleChange('summary')}
                  />
                  <Input
                    placeholder="Password"
                    secureTextEntry
                    value={props.values.password}
                    onChangeText={props.handleChange('password')}
                    onblur={props.handleBlur('password')}
                  />
                  <ErrorMessage>{props.touched.password && props.errors.password}</ErrorMessage>
                  <Input
                    placeholder="Confirm Password"
                    secureTextEntry
                    value={props.values.confirmPassword}
                    onChangeText={props.handleChange('confirmPassword')}
                    onBlur={props.handleBlur('confirmPassword')}
                  />
                  <ErrorMessage>
                    {props.touched.confirmPassword && props.errors.confirmPassword}
                  </ErrorMessage>

                  <CheckboxGroup
                    options={TERMS}
                    setFieldValue={props.setFieldValue}
                    trackColor={{ true: Colors.secondaryColor }}
                    thumbColor={Platform.select({ android: '#FFF' })}
                  />

                  <Button
                    style={styles.button}
                    onPress={props.handleSubmit}
                    isLoading={props.isSubmitting}
                  >
                    Submit
                  </Button>
                </FormConatainer>
              );
            }}
          </Formik>
        </KeyboardAwareScrollView>
        <Footer />
      </View>
    </TouchableWithoutFeedback>
  );
};

NewAccountScreen.navigationOptions = {
  headerTitle: 'Create New Account'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    alignItems: 'center'
  },
  formContainer: {
    width: '90%'
  },
  button: Platform.select({
    android: {
      width: '50%'
    },
    ios: {
      width: '50%',
      justifyContent: 'flex-start'
    }
  })
});

export default NewAccountScreen;
