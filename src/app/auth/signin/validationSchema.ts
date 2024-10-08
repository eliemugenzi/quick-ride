import * as Yup from "yup";

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required"),

});

export default schema;
