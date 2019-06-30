import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './lib/store'

import App from './App'
import Login from './views/login/Login'
import Volunteers from './views/volunteers/Volunteers'
import * as serviceWorker from './serviceWorker'
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact={true} path='/' component={ App } />
                <Route path='/login' component={ Login } />
                <Route path='/volunteers' component={ Volunteers } />
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
