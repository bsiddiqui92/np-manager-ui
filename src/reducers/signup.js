import { SIGNUP_USER } from '../lib/actionTypes'

const initialState = {
    USER_AUTHORIZED: false
}

export function signup(state = initialState, action) {

    switch(action.type) {
        case SIGNUP_USER:
            return {...state, USER_AUTHORIZED: true};
        default:
            return state
    }
}