import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import { login } from '../reducers/login'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  combineReducers({
      login
  }), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store