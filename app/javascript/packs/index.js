import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../components/index.js';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router,Route } from 'react-router-dom'

const theme = createMuiTheme();

// ReactDOM.render(
// 	<MuiThemeProvider theme={theme}>
//     <BrowserRouter>
//     <App/>
//     </BrowserRouter>
//     </MuiThemeProvider>,
//    document.getElementById('root'));
// registerServiceWorker();


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <Router>
    	<Route path="/" component={App}/>
    </Router>,
     </MuiThemeProvider>,
    document.body.appendChild(document.createElement('div')),
    
  )
})