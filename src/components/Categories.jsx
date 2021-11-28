import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Product from './Product';

import '../style/Categories.css'

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Categories() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
          
        >
          <Tab label="Tradicional" {...a11yProps(0)} />
          <Tab label="Especiais" {...a11yProps(1)} />
          <Tab label="Vegetariana" {...a11yProps(2)} />
          <Tab label="Doces" {...a11yProps(3)} />
          <Tab label="Bebidas" {...a11yProps(4)} />
        </Tabs>
      </Box>
      
      <Product value={ value } />
    </Box>
  );
}
