import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropDownOptions = [
  { key: "Select an Option", value: "" },
  { key: "Option 1", value: "option1" },
  { key: "Option 2", value: "option2" },
  { key: "Option 3", value: "option3" },
];
const radioOptions = [
  { key: "Option 1", value: "roption1" },
  { key: "Option 2", value: "roption2" },
  { key: "Option 3", value: "roption3" },
];
const checkboxOptions = [
  { key: "Option 1", value: "coption1" },
  { key: "Option 2", value: "coption2" },
  { key: "Option 3", value: "coption3" },
];
const initialValues = {
  name: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
  birthDate: null,
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
  selectOption: Yup.string().required("Required!"),
  radioOption: Yup.string().required("Required!"),
  checkboxOption: Yup.array().min(1).of(Yup.string().required("Required!")),
  birthDate: Yup.date().required("Required!").nullable(),
});
const onSubmit = (values) => console.log("Data", values);
function FormikContainer() {
  // console.log("Inside formik container...")
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log("inside field array");
        return (
          <Form>
            <FormikControl
              control="input"
              type="name"
              label="Name"
              name="name"
            />
            <FormikControl
              control="textarea"
              type="description"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a Topic"
              name="selectOption"
              options={dropDownOptions}
            />
            <FormikControl
              control="radio"
              label="Radio Topic"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              label="Checkbox Topics"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <FormikControl control="date" label="Birth Date" name="birthDate" />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
