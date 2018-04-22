import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";
import { Header, Footer } from './components/Components';

/*Importere de forskellige sider*/
import Home from './Home/Home.js';
import Links from './Links/Links.js';
import Contact from './Contact/Contact.js';
import Partners from './Partners/Partners.js';

class ITU extends Component{
    render() {
        return(
          <Router>
            <div>
             
              <Header />

              <Route exact path="/" component={Home} />
              <Route path="/links" component={Links} />
              <Route path="/contact-us" component={Contact} />
              <Route path="/partners" component={Partners} />
              
              <div className="spacer" />
              
              <Footer />

            </div>
          </Router>
        );
    }
}

export default ITU;