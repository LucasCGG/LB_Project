import './Styles/App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import React from 'react';

import NotFound from './NotFound';
import GlobalNavigation from './GlobalNavigation';
import Home from './Home';
import About from './About';
import UserRegister from './UserRegister';
import Snake from './Snake-game';
import logo from './images/logo/Logo1.png';
import Leaderboard from './Leaderboard';
import UserLogin from './UserLogin';
import Games from './Games';

export default class Layout extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render (){
    return (
      <div className="App">
        <GlobalNavigation logedIn={this.props.logedin}/>
        <div className="content">
          <header className="App-header">
            <Outlet />
          </header>
        </div>
        <footer className='App-Footer'>
          <img src={logo} alt="Logo"></img>
          <a className='footer_text'>Lucas Colaço</a>
          <a className='email'>colaco.lucasgabriel@gmail.com</a>
          <a className='website' href='https://lucascolaco.com/'>lucascolaco.com</a>
        </footer>
      </div>
  
    );
    }
  }