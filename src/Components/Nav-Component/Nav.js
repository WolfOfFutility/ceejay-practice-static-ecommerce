import React from 'react'

import axios from 'axios'
import API from '../../Utils/API'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link, Route } from 'react-router-dom'

import ShoppingCartDraw from '../ShoppingCartDraw-Component/ShoppingCartDraw'

import './Nav.css'


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
        width: 400,
    },
    listItem: {
        cursor: 'pointer',
        textDecoration: "none",
        '&:hover': {
            background: '#FAE596',
            color: 'black'
        }
    },
    closeIcon: {
        fontSize: 15,
    },
    link: {
      textDecoration: "none",
      color: "black"
    },
    ShoppingCartDraw: {
        width: 400
    }
}));

function Nav() {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };

      const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
            <List>
              <ListItem><IconButton edge="start" color="inherit" className={classes.closeIcon} aria-label="menu" onClick={toggleDrawer('left', false)}><CloseOutlinedIcon />     CLOSE </IconButton></ListItem>
              <Link to="/Home" className={classes.link}><ListItem className={classes.listItem}>Home</ListItem></Link>
              <Link to="/Monitors" className={classes.link}><ListItem className={classes.listItem}>Monitors</ListItem></Link>
              <Link to="/Keyboards" className={classes.link}><ListItem className={classes.listItem}>Keyboards</ListItem></Link>
              <Link to="/Adapters" className={classes.link}><ListItem className={classes.listItem}>Adapters & Cables</ListItem></Link>
              <Link to="/Other" className={classes.link}><ListItem className={classes.listItem}>Other Accessories</ListItem></Link>
              <Link to="/ContactUs" className={classes.link}><ListItem className={classes.listItem}>Contact Us</ListItem></Link>
            </List>
        </div>
      );

      const shoppingCart = side => (
        <div
          className={classes.ShoppingCartDraw}
          id="list"
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
            <ShoppingCartDraw />
            
        </div>
      );
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    TechShoppe
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('right', true)}>
                        <ShoppingCartIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {shoppingCart('right')}
            </Drawer>
        </div>
    )
}

export default Nav