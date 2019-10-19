import { LOGIN_USER } from '../lib/actionTypes';
import { SIGNUP_USER } from '../lib/actionTypes';
import { LOGOUT_USER } from '../lib/actionTypes';
import users from '../apis/users'
import history from './../history'


export const loginUser = formValues => async dispatch => {
    
    const response = await users.get(`/users`);
 
     dispatch({type: LOGIN_USER, payload: response.data})
 }

export const logoutUser = (status) => {
    return {
        type: LOGOUT_USER,
        status
    }
}

export const signupUser = formValues => async dispatch => {

   const response = await users.post('/users', formValues);

    dispatch({type: SIGNUP_USER, payload: response.data})

    history.push('/')
}
