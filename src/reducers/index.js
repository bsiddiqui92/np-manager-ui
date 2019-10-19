import {combineReducers} from 'redux';
import {login} from './login';
import {signup} from './signup';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    login,
    signup,
    form: formReducer
})