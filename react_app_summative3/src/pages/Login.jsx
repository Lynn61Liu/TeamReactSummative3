import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import "../css/login.css";
import src from "../img/splash.png";
<img src={src} alt="" />

function Login(props) {
  const initialValues = { email:"", password: "" };
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, name: value});
        console.log(formValues);
    };

  return(

    <body>
  <div className="container">
      <header>Discover NZ Wildlife</header>
      <form>
     <div className="divider">
     <div className="pageform">
     <div className="input-field">
         <label>E-mail:</label>
         <input
         type="email"
         name="email"
         placeholder="Email" 
         value={formValues.email}
         onChange={handleChange}
         />
         </div>
      <div className="input-field">
      <label>Password:</label>
      <input
      type="password"
      name="password"
      placeholder="Password"
         />
         </div>
     </div>
     </div>
     <button onClick={()=>{props.getUID("user001");}}> Simulate get userID from DB</button>
<nav>
<Link to="/home" ><button>Login</button></Link>
</nav>
</form>

<div class="auth">Or login with</div>
      <div class="links">
        <div class="facebook">
          <i class="fab fa-facebook-square"><span>Facebook</span></i>
        </div>
        <div class="google">
          <i class="fab fa-google-plus-square"><span>Google</span></i>
        </div>
      </div>
      <div class="signup">
        Not a member? <a href="#">Signup now</a>
      </div>
    </div>
    </body>
  )
}

export default Login