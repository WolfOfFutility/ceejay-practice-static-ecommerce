import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App-Component/App'
import { BrowserRouter, Router, Link } from 'react-router-dom'

ReactDOM.render(<BrowserRouter to="/Home"><App /></BrowserRouter>, document.getElementById('root'))


