import './Styles/App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import React from 'react';

import Layout from './Layout';
import NotFound from './NotFound';
import Home from './Home';
import About from './About';
import UserRegister from './UserRegister';
import Snake from './Games/Snake-game';
import Leaderboard from './Leaderboard';
import UserLogin from './UserLogin';
import AddGame from './AddGame';
import OverviewGames from './OverviewGames';
import User from './User';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      user_id: "",
      username: "",
      name: "",
      email: "",
      age: ""
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(x) {
    this.setState({ ...x });
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout logedin={this.state.logedIn} />}>
            <Route index element={<Home appState={this.state} />} />
            <Route path="About" element={<About />} />
            <Route path="Leaderboard" element={<Leaderboard appState={this.state} changeState={this.changeState}/>} />
            <Route path="OverviewGames" element={<OverviewGames appState={this.state} />} />
            <Route path="AddGame" element={<AddGame appState={this.state} />} />
            <Route path='Snake' element={<Snake changeState={this.changeState} appState={this.state}/>} />
            <Route path="UserRegister" element={<UserRegister />} />
            <Route path="UserLogin" element={<UserLogin changeState={this.changeState} />} />
            <Route path="User" element={<User appState={this.state} changeState={this.changeState}/>} />
            <Route path="/" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }

  
}
export default App;
