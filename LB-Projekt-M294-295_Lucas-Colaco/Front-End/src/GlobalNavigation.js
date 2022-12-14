import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/GlobalNavigation.css'

class GlobalNavigation extends React.Component {
  constructor(props) {
    super(props)
    this.state={
    }
  }

  logOut = () =>{
    this.props.logedIn = false;
  }

  render() {
    if (!this.props.logedIn) {
      return (
        <><nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About this Project</Link>
            </li>
            <li>
              <Link to="/Leaderboard">Leaderboard</Link>
            </li>
           <div className='dropdown'>
              <li className='topnav'>
                <Link className='dropdown-toggle' to="/OverviewGames">Overview Games</Link>
                <div className='dropdown-content'>
                <Link to="/AddGame">Add a Game</Link>
                <Link to="/Snake">Snake</Link>
                </div>
              </li>
            </div> 
            <div className="dropdown">
              <li className='topnav-right'>
                <a class="dropdown-toggle">User</a>
                <div class="dropdown-content">
                  <Link to="/UserRegister">Sign Up</Link>
                  <Link to="/UserLogin">Login</Link>
                </div>
              </li>
            </div>
          </ul>
        </nav></>
      )
    }
    else if (this.props.logedIn) {
      return (
        <><nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>            
            <li>
              <Link to="/About">About this Project</Link>
            </li>
            <li>
              <Link to="/Leaderboard">Leaderboard</Link>
            </li>
            <div className='dropdown'>
              <li className='topnav'>
                <Link className='dropdown-toggle' to="/OverviewGames">Overview Games</Link>
                <div className='dropdown-content'>
                <Link to="/AddGame">Add a Game</Link>
                <Link to="/Snake">Snake</Link>
                </div>
              </li>
            </div>
            <div class="dropdown">
              <li className='topnav-right'>
                <a class="dropdown-toggle">User</a>
                <div class="dropdown2-content">
                  <Link to="/" onClick={this.logOut}>LogOut</Link>
                  <Link to="/User">Preferences</Link>
                </div>
              </li>
            </div>
          </ul>
        </nav>
        </>
      )
    }

  }
}

export default GlobalNavigation;