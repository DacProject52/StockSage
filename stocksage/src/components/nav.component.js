import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <div>
            <img src='/logo1' alt='logo' width="40" height='40' className='d-inline-block align-top' />
          </div>
          <div className='container'>
            <Link className="navbar-brand" to={'/'}>StockSage : Unveiling The Market Trends</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/login'}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/register'}>Sign up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
