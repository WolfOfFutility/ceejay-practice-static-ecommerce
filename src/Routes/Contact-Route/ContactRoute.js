import React, { Component } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Background from '../../Components/Background-Component/Background'

import './ContactRoute.css'



function ContactRoute() {
    return (
        <div className="Route">
            <Background id="Keyboard"/>
            <h2>Contact Us</h2>
            <div className="contact-form">
                <form className="form-root" noValidate autoComplete="off" action="https://formspree.io/xeqgdqqr" method="POST" >
                    <TextField className="form-field" id="outlined-basic" label="Full Name" variant="outlined" type="text" name="name"/>
                    <br />
                    <TextField className="form-field" id="outlined-basic" label="Email" variant="outlined" type="text" name="_replyto" />
                    <br />
                    <TextField className="form-field" id="outlined-basic" label="Message" multiline rows="6" variant="outlined" type="text" name="message" />
                    <br />
                    <br />
                    <Button className="submit-button" type="submit" value="Send">Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactRoute