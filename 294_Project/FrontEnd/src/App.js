import './Styles/App.css';
import {
  Routes,
  Route,
  Outlet
} from 'react-router-dom'

import NotFound from './NotFound';
import GlobalNavigation from './GlobalNavigation';
import Home from './Home';
import About from './About';
import UserRegister from './UserRegister';
import Snake from './Snake-game';
import logo from './images/logo/Logo1.png';
import Leaderboard from './Leaderboard';
import UserLogin from './UserLogin';

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Leaderboard" element={<Leaderboard />}/>
        <Route path='Snake' element={<Snake />}/>
        <Route path="UserRegister" element={<UserRegister />} />
        <Route path="UserLogin" element={<UserLogin />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function Layout() {
  return (
    <><div className="App">
      <GlobalNavigation />
      <div className="content">
        <header className="App-header">
          <Outlet />
        </header>
      </div>
      <footer className='App-Footer'>
          <img src={logo}></img>
          <a className='footer_text'>Lucas Colaço</a>
        <a className='email'>colaco.lucasgabriel@gmail.com</a>
        <a className='website' href='https://lucascolaco.com/'>lucascolaco.com</a>
      </footer>
    </div></>

  );
}

export default App;
