import React, { Component } from 'react';
import { Route , Link } from "react-router-dom";
import { Marker } from '../Components';
import './Header.css';

export class Header extends Component{
    render(){
        return(
            <div className="nav-bar">
            <div className="nav-logo">
              <Link to="/">
                <p>We are</p><h1>ITU</h1>
              </Link>
            </div>
            <div className="nav-btns">
              <OldSchoolMenuLink className="nav-btn" activeOnlyWhenExact={true} to="/" label="Home" />
              <OldSchoolMenuLink className="nav-btn" to="/links" label="Links" />
              <OldSchoolMenuLink className="nav-btn" to="/contact-us" label="Contact"/>
              <OldSchoolMenuLink className="nav-btn" to="/partners" label="Partners"/>
            </div>
        </div>
        )
    }
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className={match ? "active" : ""}>
        {match ? <Marker /> : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
);