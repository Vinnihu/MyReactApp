import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import logo from './pictures/NS_Logo.png';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }


  render() {
    document.title = "Home - VH"; //Title
    const isLoggedIn = this.state.isLoggedIn;

    let LoginButton = null;
    if (isLoggedIn) {
      LoginButton = <withRouter><Link to="/"><button style={{all: "inherit", color: "white", textDecoration: "none"}}>Logout</button></Link></withRouter>;
    } else {
      LoginButton = <withRouter><Link to="/login"><button style={{all: "inherit", color: "white", textDecoration: "none"}}>Login</button></Link></withRouter>;
    }

    let registerButton = <withRouter><Link to="/registration"><button onClick={this.handleLoginClick} style={{all: "inherit", color: "white", textDecoration: "none"}}>Register</button></Link></withRouter>;

    let parallaxHeight = 650;
    let parallaxStrengh = 850;
    let sectionHeight = 500;

    return (
      <div className="App">
        <header className="App-header">
          <p className="RegisterAndLogin">{registerButton} or {LoginButton}</p>
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="App-content">
        <Parallax bgImage={require('./pictures/BG_Img1.jpg')} strength={parallaxStrengh} blur={{min: -8, max: 6}}>
          <h1 style={{ position: 'relative', top: '150px'}}>WELCOME,</h1>
          <h3 style={{ position: 'relative', top: '150px'}}>to the future!</h3>
          <div style={{ height: parallaxHeight }} />
        </Parallax>
        <div className="App-sections" style={{ height: sectionHeight }}>
          <div className="App-sections-content">
            <p>Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters. From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.  </p>
          </div>
        </div>
        <Parallax bgImage={require('./pictures/BG_Img2.jpg')} strength={parallaxStrengh} blur={{min: -8, max: 6}}>
          <h2 style={{ position: 'relative', top: '250px'}}>be ready for new technologies</h2>
          <div style={{ height: parallaxHeight }} />
        </Parallax>
        <div className="App-sections" style={{ height: sectionHeight }}>
          <div className="App-sections-content">
            <p>Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters. </p>
          </div>
        </div>
        <Parallax bgImage={require('./pictures/BG_Img5.jpg')} strength={parallaxStrengh} blur={{min: -8, max: 6}}>
          <h2 style={{ position: 'relative', top: '250px'}}>and some great inventions</h2>
          <div style={{ height: parallaxHeight }} />
        </Parallax>
        </div>
        <div className="App-footer">
          <address style={{position: 'absolute', width: '100%' }}><a style={{ textDecoration: 'none', color: 'inherit' }} href="mailto:vinnihu@gmail.com">Send me an email!</a>
          <p>Made by Vinzent Hubrich with React.js</p>
          </address>
          <p style={{position: 'absolute' ,bottom: '0', width: '100%', fontSize: '15px'}}>Copyright © 2018</p>
        </div>

      </div>
    );
  }
}

export default App;