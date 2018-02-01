import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import './Login&Registration.css';

class Login extends Component {

    handleLoginClick = () => {
        const email = this._email.value;
        const password = this._password.value;
        if (email===null || email==="" + password===null || password==="") {  //check if input is empty
            alert("All fields have to be filled!")
        } else if (localStorage.getItem(`${email}`) === password){
            alert("Logged in successfully!");
            this.props.history.push('/');
        } else {
            alert("Wrong password or email!");
        }
    }

    render() {
        document.title = "Login - VH"; //Title

        return (
            <div className="Login_Registration_Form">
                <h1>Login</h1>
                <input type="email" ref={input => this._email = input} placeholder="Email" required/> <br/>
                <input type="password" ref={input => this._password = input} placeholder="Password" required/> <br/>
                <input type="submit" value="Log In" onClick={this.handleLoginClick}/> <br/>

                <withRouter><Link to="/registration"><button className="goToRegistration_B">Not signed up yet? Register now!</button></Link></withRouter>
                <withRouter><Link to="/"><button>Back</button></Link></withRouter>
            </div>
        );
    }
}

export default Login;