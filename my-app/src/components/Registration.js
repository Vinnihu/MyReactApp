import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import './Login&Registration.css';

class Registration extends Component {

    handleRegisterClick = () => {
        const firstName = this._firstName.value;
        const lastName = this._lastName.value;
        const email = this._email.value;
        const password = this._password.value;
        if (firstName===null || firstName==="" + lastName===null || lastName==="" + email===null || email==="" + password===null || password==="") {  //check if input is empty (not 100% working)
            alert("All fields have to be filled!")
        } else if (localStorage.getItem(`${email}`)) {
            alert("This email already belongs to a registered accout!");
        } else {
            localStorage.setItem(`${email}`, `${password}`);
            alert("Registered successfully");
            this.props.history.push('/');
        }
    }

    render() {
        document.title = "Registration - VH"; //Title

        return (
            <div className="Login_Registration_Form">
                <h1>Registration</h1>
                <input type="text" ref={input => this._firstName = input} placeholder="First Name" required/> <br/>
                <input type="text" ref={input => this._lastName = input} placeholder="Last Name" required/> <br/>
                <input type="email" ref={input => this._email = input} placeholder="Email" required/> <br/>
                <input type="password" ref={input => this._password = input} placeholder="Password" required/> <br/>
                <input type="submit" value="Register" onClick={this.handleRegisterClick}/> <br/>
                <withRouter><Link to="/login"><button className="goToLogin_B">Already registered? Just sign up!</button></Link></withRouter>
                <withRouter><Link to="/"><button>Back</button></Link></withRouter>
            </div>
        );
    }
}

export default Registration;