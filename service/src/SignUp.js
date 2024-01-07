import React from 'react';
import "./SignUp.css";
import { useState } from "react";
import { Link} from "react-router-dom";
import mainlogo from "../src/expenses.png";
import main2logo from "../src/logbg.png";
function Register() {
  const [passwordShown, setPasswordShown] = useState(false);

  const [email, setemail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
//code for handling form validation
  function handleSubmit(event) {
    if(!email){
      setEmailError('Email is required');
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


    }
    if(email){

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
  }
    if(!email){
      setEmailError('Username is required');

      if(name){
      if(password){
        return;
      }
      event.preventDefault();
      return;


    }
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
          <h1  className="logcolor">Create your account</h1>
        </div>
       

        <div >
          <div class="usrtxt">E-mail</div>
        <input type="text" className="input-container" placeHolder = 'Enter the E-mail' autoComplete = 'off' 
        value={email} onChange={(event) => setemail(event.target.value)}/>
        <div className="alerttext">
          {emailError && <div className="alerttextfont">{emailError}</div>}
        </div>
          <div class="usrtxt">Username</div>
        <input type="text" className="input-container" placeHolder = 'Enter Username' autoComplete = 'off' 
        value={name} onChange={(event) => setName(event.target.value)}/>
        <div className="alerttext">
          {nameError && <div className="alerttextfont">{nameError}</div>}
        </div>
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
        </div>

        <br />
        <Link to="/store">
        
          <button className='buttonposx'  onClick={handleSubmit}>Sign Up & Log in</button>
        </Link>
        
        </div>
      </div>
  </div>
  );
}

export default Register;