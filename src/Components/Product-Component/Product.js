import React from 'react'

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { SnackbarProvider, useSnackbar } from 'notistack';

const useStyles = makeStyles({
  root: {
    width: 275,
    textAlign: "center",
    display: "inline-block",
    margin: "1%",
    border: "0.5px solid #999"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    top: 0,
    left: 0,
    paddingTop: '56.25%', // 16:9
  },
  addCartButton: {
    background: "#444",
    margin: "0 auto",
    color: "white",
    "&:hover": {
        background: "#FAE596",
        color: "black"
    }
  },
  caption: {
      marginTop: "5%"
  }
});

let cartArray = []

// const postShoppingCartData = async () => {
//   await axios.post(
//       "/Home",
//       "Item 1",
//       { headers: { 'Content-Type': 'text/plain;charset=utf-8' } }
//   ).then((res) => {
//       console.log(res.data)
//   }).catch((e) => {
//       console.log(e.response)
//   })
// }

// const addToCart = (e) => {
  
// }

const addToCartArray = (item) => {
  cartArray.push({item})
}

function Product(props) {
    const item = []
    item.push({name: props.title, imageUrl: props.imageUrl, price: props.price})

    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant, item) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar('Added To Cart!', { variant });
      addToCartArray(item)
    };

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title={props.title}
        />
        <Typography className={classes.caption}>
          {props.title}
          <br />
          <br />
          ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.addCartButton} onClick={handleClickVariant('success', item)}>Add To Cart</Button>
      </CardActions>
    </Card>
  );
}

export {  Product, cartArray }