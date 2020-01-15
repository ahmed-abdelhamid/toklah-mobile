import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please Enter Your Name.')
    .min(2, "Your Name Can't Be Less Than 2 Letters.")
    .trim(),
  email: yup
    .string()
    .required('Please Enter Your Email')
    .email('Please Enter a Valid Email.')
    .trim(),
  mobile: yup
    .number()
    .required('Please Enter Your Mobile No.')
    .positive("Mobile No. Couldn't Be Negative Value."),
  birthdate: yup.string().required('Please Enter Your Birthdate'),
  gender: yup
    .string()
    .required('Please Choose Your Gender.')
    .nullable(),
  city: yup.string().required('Please Enter Your City Name.'),
  image: yup.string().required('Please Upload Your Image.'),
  password: yup
    .string()
    .required('Please Enter Your Password.')
    .trim(),
  confirmPassword: yup
    .string()
    .required('Please Enter Your Password Again.')
    .trim()
  // terms: yup.boolean().isValidSync(true)
});
