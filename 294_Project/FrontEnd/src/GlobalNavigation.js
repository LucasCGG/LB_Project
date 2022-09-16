import React from 'react';
import { Link } from 'react-router-dom';

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
          <li className='topnav-right'>
            <Link to="/User">User</Link>
          </li>
        </ul>
      </nav></>

    )
  }
}

export default GlobalNavigation;