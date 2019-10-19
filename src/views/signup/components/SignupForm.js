import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signupUser} from '../../../actions';

class SignupForm extends React.Component{


    onSubmit = (formValues) => {
       this.props.signupUser(formValues);
    }

    renderError({error,touched}){
        if(touched && error){
            return(
                <div>
                    <br/>
                <div className="alert alert-danger">
                   {error}
                </div>
                </div>
            )
        }
    }

    renderInput = ({input, placeholder, type, meta})=>{
        
       
        return( 
        <div className="form-group">
            <input {...input} required="required" type={type} placeholder={placeholder} className="form-control" autoComplete="off"/>
            {this.renderError(meta)}
        </div>
        )
    }

    render(){
        
        return(
          <div className="login-form">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} action="/examples/actions/confirmation.php" method="post">
            <h2 className="text-center">Sign up</h2>
              <Field name='username' type="text" component={this.renderInput} placeholder="Username or Email"/>
              <Field name='first' type="text" component={this.renderInput} placeholder="First Name"/>
              <Field name='last' type="text" component={this.renderInput} placeholder="Last Name"/>
              <Field name='password' type="password" component={this.renderInput} placeholder="Password"/>
              <Field name='confirmpassword' type="password" component={this.renderInput} placeholder="Confirm Password"/>
              
              <div className="form-group">
                <button type="submit" name="submit" className="btn btn-primary btn-block">Sign Up</button>
              </div>
          </form>
          <p className="text-center">Already have an account? <Link to="/login">Login Here</Link></p>
      </div>
        )
    }

}

const validate = (formValues) =>{

    
    const error ={}
    
    if(formValues.password !== formValues.confirmpassword){
        error.confirmpassword = "password doesn't match";
        
    }

    return error;
}
const formWrapped = reduxForm({
    form : 'createAccount',
    validate
})(SignupForm);


export default connect(null, {signupUser})(formWrapped);