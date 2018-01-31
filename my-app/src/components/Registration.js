import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import './Registration.css';

class Registration extends Component {

    handleRegisterClick = () => {
        const firstName = this._firstName.value;
        const lastName = this._lastName.value;
        const email = this._email.value;
        const password = this._password.value;
        if (localStorage.getItem(`${email}`)) {
            alert("Es existiert bereits ein Konto mit dieser Email!")
        } else {
            localStorage.setItem(`${email}`, `${password}`);
        }
    }


    render() {
        document.title = "Registration - VH"; //Title

        return (
            <div>
                <h2>Registration</h2>
                <div className="registration">
                    <input type="text" ref={input => this._firstName = input} placeholder="First Name" /> <br/>
                    <input type="text" ref={input => this._lastName = input} placeholder="Last Name" /> <br/>
                    <input type="text" ref={input => this._email = input} placeholder="Email" /> <br/>
                    <input type="password" ref={input => this._password = input} placeholder="Password" /> <br/>
                    <input type="submit" value="Submit" onClick={this.handleRegisterClick}/>
                </div>
                <withRouter><Link to="/login"><button className="goToLogin_B" onClick="window.loaction.reload()">Already registered? Just sign up!</button></Link></withRouter>
                <withRouter><Link to="/"><button onClick="window.location.reload()">Back</button></Link></withRouter>
            </div>
        );
    }
}

export default Registration;