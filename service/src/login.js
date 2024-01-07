import React from "react";
import "./login.css";
import { useState } from "react";
import { Link} from "react-router-dom";
import mainlogo from "../src/expenses.png";
import main2logo from "../src/logbg.png";


function Login() {
  const [passwordShown, setPasswordShown] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
//code for handling form validation
  function handleSubmit(event) {
    
    if(!name){
      setNameError('Username is required');
      if(!password){
        setPasswordError('Password is required');
        event.preventDefault();
        return;
      }else{
        setNameError('Username is required');
        setPasswordError('')
      }
      event.preventDefault();
      return;


    }
    if(name){
      setNameError('');
      if (!password) {
        setPasswordError('Password is required');
        event.preventDefault();
        return;
      }
    }
    
    else{
      setNameError('');
      setPasswordError('');
      
    }
  }
  //page code here
  return (
    <div className="postionlogin">
      
    <div>
      <br></br>
     <header>
      <nav>
        <ul>
          <div className="logo-container"><img class="mainl" src={mainlogo} alt="Frntgo"/></div>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
     </div>
    <div><img class="mainl2" src={main2logo} alt="rntgo"/></div>
    <div className="back">
      <div className="postion">
        <div>
          <br />
          <h1  className="logcolor">Login to your account</h1>
        </div>
        <br></br>
       

        <div >
        <br></br>
          <div class="usrtxt">Username</div>
        <input type="text" className="input-container" placeHolder = 'Enter Username' autoComplete = 'off' 
        value={name} onChange={(event) => setName(event.target.value)}/>
        <div className="alerttext">
          {nameError && <div className="alerttextfont">{nameError}</div>}
        </div>
        <br></br>
        <br></br>
        <div class ="pswtxt">Password</div>
        
          <input className="pass" type={passwordShown ? "text" : "password"}
            value={password}
            placeHolder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
            />
            
            <div className="alertpassword">
              {passwordError && <div className="alerttextfont">{passwordError}</div>}
            </div>
          <br/>
          <label className="fontfortext">
            <input type="checkbox" className="" onClick={togglePassword} />
            Show Password
          </label>
          <div className="forgor">
            <Link to ="/forgot">
                <a href="forgot.html">Forgot Password?</a>
            </Link>
          </div>
        </div>

        <br />
        <Link to="/store">
        
          <button className='buttonpos'  onClick={handleSubmit}>Login</button>
        </Link>
        
        <div className="sign">
            <Link to ="/SignUp">
                <a href="track.html">Don't have an account? Sign up!</a>
            </Link>
        </div>
        
        </div>
      </div>
  </div>
  );
}
export default Login;