import * as Yup from "yup";

const schema = Yup.object().shape({
  type: Yup.string().required("type is required"),
  description: Yup.string().required("Description is required")
});

export const  editSchema = Yup.object().shape({
    type: Yup.string(),
    description: Yup.string()
})

export default schema;
