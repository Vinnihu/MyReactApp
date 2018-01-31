import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from "./components/Login";
import Registration from './components/Registration';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/login' component={Login}/>
            <Route path='/registration' component={Registration}/>
            
        </div>
    </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();