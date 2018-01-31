import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Login.css';

class Login extends Component {

    handleLoginClick = () => {
        if (localStorage.getItem(`${this._email.value}`) === this._password.value){
            console.log(`Email: ${this._email.value}`);
            console.log(`Password: ${this._password.value}`);
            alert("Logged in successfully!");
        } else {
            alert("Password or email wrong!")
        }
    }

    render() {
        document.title = "Login - VH"; //Title

        return (
            <div>
                <h2>Login</h2>
                <input type="text" ref={input => this._email = input} placeholder="Email" /> <br/>
                <input type="password" ref={input => this._password = input} placeholder="Password" /> <br/>
                <Button onClick={this.handleLoginClick}>Login</Button> <br/>

                <withRouter><Link to="/registration"><button className="goToRegistration_B">Not signed up yet? Register now!</button></Link></withRouter>
                <withRouter><Link to="/"><button>Back</button></Link></withRouter>
            </div>
        );
    }
}

export default Login;