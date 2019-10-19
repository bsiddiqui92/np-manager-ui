/**
 * Reducers for login flow.
 * @author Bilal Siddiqui<bos19992@gmail.com>
 */
import { LOGIN_USER } from '../lib/actionTypes'

const initialState = {
    USER_AUTHENTICATED: false
}

export function login(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return Object.assign({}, state, {
                userAuthenticated: action.status
            })
        default:
            return state
    }
}
