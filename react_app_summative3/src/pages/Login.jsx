import React, { useState } from "react";
import Cookies from "js-cookie";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const initialFormValues = {
  email: "",
  password: "",
};
function Login(props) {
  const [open, setOpen] = React.useState(true);

  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };
  const [inputValues, setinputValues] = useState(initialValues);

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = { ...inputValues, [name]: value };
    setinputValues(temp);

    setValues({
      ...values,
      [name]: value,
    });
    validate({ [name]: value });
  };

  const validate = (fieldValues = values) => {
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
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.email &&
      fieldValues.password &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = (e) => {
    let temp = { email: "", password: "" };
    e.preventDefault();
    if (formIsValid()) {
      // validate db userInfo
      axios
        .get(`http://localhost:4000/api/login-by-email/${e.target.email.value}`)
        .then((response) => {
          if (response.status === 200 && response.data.users.length > 0) {
            if (response.data.users[0].Password === e.target.password.value) {
              props.getUID(response.data.users[0]);
              Cookies.set("userID", response.data.users[0]._id, { expires: 1 });
              Cookies.set("userRole", response.data.users[0].userRole, {
                expires: 1,
              });
              Cookies.set("userImg", response.data.users[0].userImg, {
                expires: 1,
              });
              navigate("/home");
            } else {
              temp.password = "Incorrect password.";
              setErrors({ ...temp });
            }
          } else {
            temp.email = "Email does not exist.";
            setErrors({ ...temp });
          }
        })
        .catch(function (error) {
          // alert("Some error conneting DB!");
          setOpen(true);
        });
    }
  };

  return (
    <div className="container">
      <div className="login-logo"></div>
      <h1 className="login-title">Welcome to the ZIP Community!</h1>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="input-field">
          <label>E-mail:</label>
          <input
            className={errors.email ? "input-error" : ""}
            autoFocus="autoFocus"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleChange}
          />
          <div className="errors">{errors.email ? errors.email : ""}</div>
        </div>

        <div className="input-field ">
          <label>Password:</label>
          <input
            className={errors.password ? "input-error" : ""}
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
          />
          <div className={errors.password ? "errors" : ""}>
            {errors.password ? errors.password : ""}
          </div>
        </div>
        <div className="nav-wrap">
          <button className="loginbtn" type="submit" disabled={!formIsValid()}>
            Login
          </button>
        </div>
      </form>
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton aria-label="close"
                onClick={() => {
                  setOpen(false);
                }}
              > 
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            Connecting DB error ！— check it out!
          </Alert>
        </Collapse>
      </Box>
      <div className="signup">
        Not a member? <span>Sign up now</span>
      </div>
    </div>
  );
}

export default Login;
