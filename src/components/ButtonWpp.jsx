import React, { Component } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';

class ButtonWpp extends Component {
  render() {
    const {
      whatsApp: { name, link },
    } = this.props;
    return (
      <Button
        variant="contained" 
        className="wpp-btn"
        href={link}
        target="blank"
        startIcon={<WhatsAppIcon />}
        size="large"
      >
        {name}
      </Button>
    );
  }
}

export default ButtonWpp;
