import React, { Component } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Paper } from '@mui/material';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import '../style/Categories.css'


class CategoryProduct extends Component {
  render() {
    const { category } = this.props
    return (
      <>

        {category.map(
          ({ id, nome, ingrediente, price: { gigante, maracana, pequena } }) => (
            <Grow in={ true }  style={{ transformOrigin: '0 0 0' }}>
            <Card sx={{ Width: 100 }} key={ id } className="items" >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="product-name">
                  {nome}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="product-description">
                  {ingrediente}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  divider={<Divider orientation="vertical" flexItem />}
                >
                  <Paper className="price">
                    <div className="price-title">Pequena:</div> R$ {pequena.toFixed(2)}
                  </Paper>
                  <Paper className="price">
                    <div className="price-title">Maracanã:</div> R$ {maracana.toFixed(2)}
                  </Paper>
                  <Paper className="price">
                    <div className="price-title">Gigante:</div> R$ {gigante.toFixed(2)}
                  </Paper>
                </Stack>
              </CardContent>
              <Divider />
            </Card>
          </Grow>
          )
          )}
      </>
    );
  }
}

export default CategoryProduct;
