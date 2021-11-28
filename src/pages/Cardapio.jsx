import React, { Component } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Cardapio extends Component {
  render() {
    return (
      <>
        <Header />
        <Categories />
        <Footer />
      </>
    );
  }
}

export default Cardapio;

