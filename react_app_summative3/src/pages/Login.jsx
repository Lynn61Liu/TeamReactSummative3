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
        temp.photo = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid.";
    }
    setErrors({ ...temp });
  };

  return (
    <div className="container">
      <div className="login-logo"></div>
      <h1 className="login-title">Welcome to the ZIP Community!</h1>
      <form className="login-form">
        <div className="input-field">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="nav-wrap">
          <nav>
            <Link to="/home">
              <button className="loginbtn" type="submit">
                Login
              </button>
            </Link>
          </nav>
        </div>
      </form>

      <div className="signup">
        Not a member? <a href=" ">Sign up now</a>
      </div>
    </div>
  );
}

export default Login;
