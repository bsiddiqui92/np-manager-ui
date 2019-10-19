import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './lib/store';
import history from './history';

import App from './App'
import Login from './views/login/components/LoginForm'
import Signup from './views/signup/components/SignupForm'
import Volunteers from './views/volunteers/Volunteers'
import Header from './views/header/Header'
import Contact from './views/contact/Contact';
import About from './views/about/About';



import * as serviceWorker from './serviceWorker'
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Header/>
            <Switch>
                
                <Route exact path='/' component={ App } />
                <Route path='/login' component={ Login } />
                <Route path='/signup' component={ Signup } />
                <Route path='/volunteers' component={ Volunteers } />
                <Route path='/volunteers' component={ Volunteers } />
                <Route path='/contact' component={ Contact } />
                <Route path='/about' component={ About } />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
