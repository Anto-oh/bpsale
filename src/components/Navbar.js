import React, { Component } from 'react'
import imago from '../logosbpay/Logotipo_blanco.png'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <a
          id='imagot'
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://www.blockpay.mx/"
          target="_self"
          rel="noopener noreferrer"
        >
          <img src={imago} height="40" className="d-inline-block align-top" alt="" />
        </a>
      </nav>
    );
  }
}

export default Navbar;
