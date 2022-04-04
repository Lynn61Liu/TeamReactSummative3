import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

const initialFormValues = {
  email: "",
  password: "",
  formSubmitted: false,
  success: false,
};
function Login(props) {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = { ...formValues, [name]: value };
    setFormValues(temp);

    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const validate = (fieldValues = values) => {
    // this function will check if the form values are valid
    let temp = { ...errors };
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "Password is required.";

    if ("email" in fieldValues) {
      temp.email = fieldValues.email ? "" : "email is required.";
      if (fieldValues.email)
        temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }
    setErrors({ ...temp });
    console.log(errors)
  };

  const formIsValid = (fieldValues = values) => {
    console.log('formIsValid trggled')
    const isValid =
      fieldValues.email &&
      fieldValues.password &&
      Object.values(errors).every((x) => x === "");
      console.log('isValid',isValid)
    return isValid;
  };


  return (
    <div className="container">
      <div className="login-logo"></div>
      <h1 className="login-title">Welcome to the ZIP Community!</h1>
      <form className="login-form">
        <div className="input-field">
          <label>E-mail:</label>
          <input
           className={errors.email ? "input-error" : ''}
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          /> 
          <div className="errors">
          {errors.email ? errors.email : ''}
          </div>
        </div>
        
        <div className="input-field ">
          <label>Password:</label>
          <input
          className={errors.password ? "input-error" : ''}
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
           <div className= {errors.password ? "errors" : ''}>
          {errors.password ? errors.password : ''}
          </div>
        </div>
        <div className="nav-wrap">
          <nav>
            <Link to="/home">
              <button 
              className="loginbtn" 
              type="submit" 
              disabled={!formIsValid()}
              >
                Login
              </button>
            </Link>
          </nav>
        </div>
      </form>

      <div className="signup">
        Not a member? <span>Sign up now</span>
      </div>
    </div>
  );
}

export default Login;
