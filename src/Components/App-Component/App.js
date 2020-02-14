import React, { Component } from 'react'
import './App.css'

import { SnackbarProvider, useSnackbar } from 'notistack';

import Nav from '../Nav-Component/Nav'
import Background from '../Background-Component/Background'
import Main from '../Main-Component/Main'

function App() {
    return(
    <div className="whole-app">
      <SnackbarProvider maxSnack={6}>
        <Nav />
        <Main />
      </SnackbarProvider>
    </div>
  )
}

export default App;
