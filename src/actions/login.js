/**
 *  Actions for login flow 
 *  @author Bilal Siddiqui<bos19992@gmail.com>
 **/
import { LOGIN_USER } from '../lib/actionTypes'

export function loginUser (status) {
    return {
        type: LOGIN_USER,
        status
    }
}