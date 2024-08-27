import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Should be a valid email address")
    .required("Email is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  gender: Yup.string().required("Gender is required"),
});

export default schema;
