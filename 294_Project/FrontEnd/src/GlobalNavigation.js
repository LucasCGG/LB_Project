import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Styles/GlobalNavigation.css'

class GlobalNavigation extends React.Component {


  render() {
    return (
      <><nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/About">About this Project</Link>
          </li>
          <li>
            <Link to="/Snake">Snake</Link>
          </li>
          <div class="dropdown">
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
}

export default GlobalNavigation;