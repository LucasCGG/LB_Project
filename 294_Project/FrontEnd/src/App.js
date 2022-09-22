import './Styles/App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import React from 'react';

//import Layout from './App.js'
import NotFound from './NotFound';
import GlobalNavigation from './GlobalNavigation';
import Home from './Home';
import About from './About';
import UserRegister from './UserRegister';
import Snake from './Snake-game';
import logo from './images/logo/Logo1.png';
import Leaderboard from './Leaderboard';
import UserLogin from './UserLogin';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logedIn: false,
      user_id: "",
      username: "",
      name: "",
      email: "",
      age: "",
      score:"",
      game_id:"",
    }

    this.changeState = this.changeState.bind(this);
  }

  changeState(x) {
    this.setState({...x});
    console.log(this.state);
    this.checkLogin();
  }




  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home appState={this.state} />} />
            <Route path="About" element={<About />} />
            <Route path="Leaderboard" element={<Leaderboard appState={this.state}/>} />
            <Route path='Snake' element={<Snake changeState={this.changeState}/>} />
            <Route path="UserRegister" element={<UserRegister />} />
            <Route path="UserLogin" element={<UserLogin changeState={this.changeState} />} />
            <Route path="/" />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

function Layout() {
  return (
    <div className="App">
      <GlobalNavigation />
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

export default App;
