import React, { Component } from 'react';
import TabPanel from './tab-categories/TabPanel';

class Product extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Three
        </TabPanel>
      </div>
    );
  }
}

export default Product;
