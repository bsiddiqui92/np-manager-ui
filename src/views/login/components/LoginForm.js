/**
 * This is the base component for the user login form.
 * @author Bilal Siddiqui<bos19992@gmail.com>
 */
import React from 'react'
import PropTypes from 'prop-types'

export function LoginForm({ handleSubmit }) {

    return (
        <>
            <form onSubmit={handleSubmit} method="POST">
                <input name="username" id="username" /><br />
                <input name="password" id="password" /><br />
                <button>Login</button>
            </form>
        </>
    )
}

export default LoginForm


/**
 * Define component props.
 */
LoginForm.propTypes = {
    /**
     * Submit handler for the login button.
     */
    handleSubmit: PropTypes.func.isRequired,

}