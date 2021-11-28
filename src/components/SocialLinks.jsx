import React, { Component } from 'react';

import { contactDetails } from '../services/contact-data';


class SocialLinks extends Component {
  render() {
    const { social } = contactDetails
    return (
      <div className="social-icons">
       { social.map(({icon, link, name}) => (
         <a href={link} target="blank" key={name}>
           <i className={icon} />
         </a>
       ))} 
      </div>
    );
  }
}

export default SocialLinks;