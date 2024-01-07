import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import frntlogo from "../src/picintro.webp";
import mainlogo from "../src/expenses.png";
class LandingPage extends React.Component
{
  render()
  {
    return(
      <div className="bg-image">
      <div>
      <p></p>
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
      
      </div>
          <div class="headingtxt">
          <h1>Take full control of <br/> your Expenses!</h1>
          </div>
          <div class="head2txt">
            <h4>Expenses tracker helps you manage your money,<br/>optimize expenses, and grow savings.</h4>
          </div>
            <div className="landpic"> 
            <img  src={frntlogo} alt="Frntlogo"/>
            </div>
            <div >
              <Link to ="/login">
                <button className='login-button' >Log in</button>
                </Link>
              </div>
          </div>
    );
  }
}

export default LandingPage;

