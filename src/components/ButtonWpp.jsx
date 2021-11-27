import React, { Component } from 'react';

class ButtonWpp extends Component {
  render() {
    const { whatsApp: { icon, name, link } } = this.props;
    return (
      <a href={ link } target="blank">
        <div className="call-whats">
          <i className={icon}/> { name }
        </div>
      </a>
    );
  }
}

export default ButtonWpp;