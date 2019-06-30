import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/login'

import LoginForm from './components/LoginForm'

function Login () {

    const loginUser = event => {
        event.preventDefault()

        console.log('Submitting login request')
    }

    return (
        <>
            <LoginForm handleSubmit={loginUser} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.userAuthenticated 
    }
}

const mapDispatchToProps = dispath => {
    return {
        login: status => {
            dispath(loginUser(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
