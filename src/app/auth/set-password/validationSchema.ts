
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
      
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf(
        [Yup.ref('password'), null],
        "Passwords must match",
      )
  });

  export default validationSchema