import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";

function Login(props) {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log(formValues);
    // if(e.target.name==="email"){
    //   setemail(e.target.value);
    // }
    // if(e.target.name==="password"){
    //   setpassword(e.target.value)}
    const { name, value } = e.target;
    // let temp = {...formValues, name: value}  name is a object property
    let temp = { ...formValues, [name]: value };
    setFormValues(temp);
  };
  return (
    // <body>  cannot set body in component。 i think all components are part of body
    // we can see the <body > exit in  ’../public/index.html ‘
    <div className="container">
      {/* <h1 >Sign in</h1>    if no set className for H1 in here  ，your style will effect others page H1 style.            */}
      <h1 className="login-title">Sign in</h1>
      <form className="login-form">
        {/* <div className="divider">
          <div className="pageform"> */}
        <div className="input-field">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            // placeholder="Email"
            // value={email}
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
            // value={password}
            onChange={handleChange}
            // placeholder="Password"
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

        {/* </div>
        </div> */}
      </form>

      <div className="auth">Or login with</div>
      <div className="links">
        <div className="facebook">
          <i className="fab fa-facebook-square">
            <span>Facebook</span>
          </i>
        </div>
        <div className="google">
          <i className="fab fa-google-plus-square">
            <span>Google</span>
          </i>
        </div>
      </div>
      <div className="signup">
        Not a member? <a href="#">Sign up now</a>
      </div>
    </div>
    // </body>
  );
}

export default Login;
