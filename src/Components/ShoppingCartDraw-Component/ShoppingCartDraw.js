import React from 'react'

import './ShoppingCartDraw.css'

import {cartArray} from '../Product-Component/Product'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
    navBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    root: {
        flexGrow: 1,
      },
    title: {
        flexGrow: 1,
    },
    loginButton: {
        marginRight: theme.spacing(2)
    },
    list: {
        width: 250,
    },
    cartProduct: {
        cursor: 'auto',
        textDecoration: "none",
        '&:hover': {
            background: '#FAE596',
            color: 'black'
        },
        width: 400,
    },
    closeIcon: {
        fontSize: 15,
    },
    link: {
      textDecoration: "none",
      color: "black"
    },
    divider: {
        verticalAlign: "bottom"
    },
    productImage: {
        height: 100,
        width: 150,
        display: "inline-block",
        float: "left",
        marginLeft: 20,
        marginTop: 10,
        border: "1px solid #333",
        backgroundPosition: "center"
    },
    productInfo: {
        height: 100,
        display: "inline-block"
    },
    removeProduct: {

    }
}));


function ShoppingCartDraw() {
    var totalCost = 0
    
    const addCost = (num1, num2) => {
        totalCost = Number(num1) + Number(num2)
    }

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
    
      const classes = useStyles()
        const [state, setState] = React.useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });

    return (
        <div className="shopDraw">
            <List className={classes.list}>
              <ListItem><IconButton edge="start" color="inherit" className={classes.closeIcon} aria-label="menu" onClick={toggleDrawer('right', false)}><CloseOutlinedIcon />     CLOSE </IconButton></ListItem>
              {cartArray.map((item, index) => {
                  return (
                      <div key={index} className={classes.cartProduct}>
                          {addCost(totalCost, item.item[0].price)}
                        <div className={classes.productImage} style={{background: "url('" + item.item[0].imageUrl +"')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} />
                        <div className={classes.productInfo}>
                            <ListItem>{item.item[0].name}</ListItem>
                            <ListItem>Price: ${item.item[0].price}</ListItem>
                            <ListItem><Button className={classes.removeProduct}>Remove</Button></ListItem>
                        </div>
                        <br />
                        <br />
                        <Divider className={classes.divider} />
                      </div>
                  )
              })}
              <br />
              <br />
            </List>
            <center>
                <p><strong>Total Cost: ${(totalCost).toFixed(2)}</strong></p>
                <Button className="checkoutButton">Proceed To Checkout</Button>
                <br />
                <br />
            </center>
        </div>
    )
}

export default ShoppingCartDraw