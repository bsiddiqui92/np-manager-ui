/**
 * This is the base component for the user login form.
 * @author Bilal Siddiqui<bos19992@gmail.com>
 */
import React from 'react';

import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {loginUser} from '../../../actions';
import GoogleButton from "../../GoogleButton";
//import { GoogleLoginButton } from "react-social-login-buttons";

class LoginForm extends React.Component{


    onSubmit = (formValues) =>{
       this.props.loginUser(formValues)
       console.log(formValues)
    }

    renderInput = ({input, placeholder, type, meta})=>{
        
       
        return( 
        <div className="form-group">
            <input {...input} required="required" type={type} placeholder={placeholder} className="form-control" autoComplete="off"/>
            {/* {this.renderError(meta)} */}
        </div>
        )
    }

    render(){
        return (
        <div className="login-form">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}  method="post">
                    <h2 className="text-center">Log in</h2>       
                    <Field name='username' type="text" component={this.renderInput} placeholder="Username or Email"/>
                    <Field name='password' type="password" component={this.renderInput} placeholder="Password"/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
                        <Link to="#" className="pull-right">Forgot Password?</Link>
                    </div> 
                </form>
                {/* <button className="loginBtn loginBtn--google btn btn-block">
                        Login with Google
                </button> */}
                <h4 className="text-center"><i>or</i></h4>
                <div className="googleButton">
                    <GoogleButton onClick={() => alert("Hello")} />
                </div>
                
                <br/>
        <p className="text-center"><Link to="/signup">Create an Account</Link></p>
        </div>
        )
}
}

const formWrapped = reduxForm(
   {
        form: 'loginForm'
   }
)(LoginForm)

export default connect(null, {loginUser})(formWrapped)