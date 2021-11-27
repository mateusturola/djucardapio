import React, { Component } from 'react';
import { contactDetails } from '../services/contact-data';
import ButtonWpp from './ButtonWpp';
import '../style/header.css';
import Categories from './Categories';

class Header extends Component {
  render() {
    const { logo, name, whatsApp } = contactDetails;
    return (
      <>
        <header className="header">
          <div className="header-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="header-info">
            <h5 className="header-title">{name}</h5>
            <ButtonWpp whatsApp={whatsApp} />
          </div>
        </header>
        <Categories />
      </>
    );
  }
}

export default Header;
