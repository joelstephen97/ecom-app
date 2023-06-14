import React from 'react';
import Header from "../Components/header.js"
import Menu from "../Components/navbar.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';

const Homepage = () => {
    return (
      <html>
        <header>
          <Header/>
          <Menu/>
        </header>
        <body>
          <div>
            <h1>SORT OUT YOUR <br></br> SPRING LOOK</h1>
            <h4>We will help to develop every smallest thing into a <br></br> big one for your company</h4>
            <div>
              <button><Link to="/shop"><h2>SHOP {">"}</h2></Link></button>
            </div>
            
          </div>
        </body>
      </html>
     
    );
}

export default Homepage;