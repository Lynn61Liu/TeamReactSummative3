import { useState } from "react";
const initialFormValues = {
  AnimalName: "",
  photo: "",
  description: "",
  formSubmitted: false,
  success: false,
};

const useFormControls = () => {
  // We'll update "values" as the form updates
  const [values, setValues] = useState(initialFormValues);
  // "errors" is used to check the form for errors
  const [errors, setErrors] = useState({});

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    console.log('e.target.name=',e.target.name);
    console.log('e.target.value=',e.target.value);
    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const validate = (fieldValues = values) => {
    // this function will check if the form values are valid
    let temp = { ...errors };
    //   console.log(temp);

    if ("AnimalName" in fieldValues)
      temp.AnimalName = fieldValues.AnimalName ? "" : "title name is  required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "email is not valid.";
      if (fieldValues.email)
        temp.photo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "email is not valid.";
    }

    if ("photo" in fieldValues) {
      temp.photo = fieldValues.photo ? "" : "need one img.";
    }

    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";

    setErrors({
      ...temp,
    });
  };

  const handleFormSubmit = async (e) => {
    // console.log('handleFormSubmit');
    // this function will be triggered by the submit event
    e.preventDefault();
    if (formIsValid()) {
      console.log("values=", values);
      //   await postContactForm(values);
      alert("You've posted your form!");
    }
  };


  const formIsValid = (fieldValues = values) => {
    // this function will check if the form values and return a boolean value
    //   (fieldValues = values) => {
    //  console.log('formIsValid ');
    const isValid =
      fieldValues.AnimalName &&
      fieldValues.photo &&
      fieldValues.description &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors,
  };
};

export default useFormControls;
