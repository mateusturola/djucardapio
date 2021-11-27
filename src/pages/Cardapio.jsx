import React, { Component } from 'react';
import Header from '../components/Header';
import Products from '../components/Products';

class Cardapio extends Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
        <p>Vai querer oq hj?</p>
      </div>
    );
  }
}

export default Cardapio;

