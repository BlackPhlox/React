import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component{
    render(){
        return(
            <footer className="itu-logo">
            <p>IT UNIVERSITY OF COPENHAGEN</p>
            <div className="footer-column">
              <h2>Find Us</h2>
              <p>Rued Langgaards Vej 7</p>
              <p>2300 København S Danmark</p>
            </div>
            <div className="footer-column">
              <h2>Contact Us</h2>
              <p>Phone: +45 72 18 50 00</p>
              <p>E-Mail: itu@itu.dk</p>
            </div>
          </footer>
        )
    }
}