import React, { Component } from 'react';
import { Button, Fab } from '@mui/material';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import '../style/Home.css';
import { contactDetails } from '../services/contact-data';
import WhatsApp from '@mui/icons-material/WhatsApp';
class Home extends Component {
  render() {
    const { logo } = contactDetails;
    return (
      <section className="home">
        <div className="content blur">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <Button
            variant="outlined"
            className="card-btn"
            href="/cardapio"
            startIcon={<AddCircleTwoToneIcon />}
            size="large"
          >
            VER CARDÁPIO
          </Button>
          <Fab color="primary" aria-label="edit" href="https://api.whatsapp.com/send?phone=5524999685136 ">
            <WhatsApp />
          </Fab>
        </div>
      </section>
    );
  }
}

export default Home;
