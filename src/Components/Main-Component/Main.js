import React from 'react'
import { Route, Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Main.css'

import Background from '../Background-Component/Background'
import { Product, cartArray } from '../Product-Component/Product'
import MonitorRoute from '../../Routes/Monitor-Route/MonitorRoute'
import KeyboardRoute from '../../Routes/Keyboard-Route/KeyboardRoute'
import AdapterRoute from '../../Routes/Adapter-Route/AdapterRoute'
import OtherRoute from '../../Routes/Other-Route/OtherRoute'
import ContactRoute from '../../Routes/Contact-Route/ContactRoute'

const useStyles = makeStyles(theme => ({
    learnMoreButton: {
        color: "black",
        background: 'white',
        marginLeft: "300px"
    }
}));

function Main() {
    const classes = useStyles()
    return (
        <div className="main">
            <Route path="/Home" render={() => (
                <div>
                    <Background id="Home"/>
                    <div className="header-text">
                        <h1>Shop</h1>
                        <h2>Efficient,</h2>
                        <h3>Yet Affordable</h3>
                        <Link to="/Monitors" className="browse-link">Browse Products -></Link>
                    </div>
                    <br />
                    <div className="animated-arrow">
                        <ExpandMoreIcon className="down-arrow" />
                    </div>
                    <div className="home-2">
                        <h2>This Weeks Specials</h2>
                        <div className="products-list">
                            <Product 
                                title="Apple Mac"
                                imageUrl="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                price="2000.00"
                            />
                            <Product 
                                title="Headphones"
                                imageUrl="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                price="328.95"
                            />
                            <Product 
                                title="Keyboard"
                                imageUrl="https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
                                price="125.35"
                            />
                            <Product 
                                title="GPU Card"
                                imageUrl="https://images.unsplash.com/photo-1578286788444-8c1487fcd823?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                price="498.99"
                            />
                        </div>
                    </div>
                </div>  
            )} />
            <Route path="/Monitors" component={MonitorRoute} />
            <Route path="/Keyboards" component={KeyboardRoute} />
            <Route path="/Adapters" component={AdapterRoute} />
            <Route path="/Other" component={OtherRoute} />
            <Route path="/ContactUs" component={ContactRoute} />
        </div>
    )
}

export default Main