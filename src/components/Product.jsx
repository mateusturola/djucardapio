import React, { Component } from 'react';
import CategoryProduct from './CategoryProduct';
import TabPanel from './tab-categories/TabPanel';

import { pizzaTradicional } from '../services/pizza-trad';
import { pizzaEsp } from '../services/pizza-esp';
import { pizzaVegetariana } from '../services/pizza-veg';
import { pizzaDoce } from '../services/pizza-doce';


class Product extends Component {
  render() {
    const { value } = this.props;
    return (
      <section>
        <TabPanel value={value} index={0}>
          <CategoryProduct category={ pizzaTradicional } />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CategoryProduct category={ pizzaEsp } />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CategoryProduct category={ pizzaVegetariana } />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CategoryProduct category={ pizzaDoce } />
        </TabPanel>
        <TabPanel value={value} index={4}>
          Em breve
        </TabPanel>
      </section>
    );
  }
}

export default Product;
