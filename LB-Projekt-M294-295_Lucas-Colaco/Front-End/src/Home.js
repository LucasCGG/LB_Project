import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/Home.css'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: props.appState,
            games: [{
                name:"",
                description:""
            }]
        }
    }

    logOut = () =>{
        this.props.logedIn = false;
    }

    render() {
        if (this.state.appState.logedIn === false) {
            return (
                <>
                    <h1>
                        Welcome to my project
                    </h1>


                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <p>Modul 294 & 295</p>
                        <p>Author: Lucas Colaço</p>
                        <hr />
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <h1>
                        Welcome {this.state.appState.username}
                    </h1>


                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <div className='games-infos-container'>
                            <div class="container-1 float-children">
                                <h2>All around the games</h2>
                                <ul>
                                    <h3>Play a Game from the List below</h3>
                                    <li><Link to="/Snake">Snake</Link></li>
                                    <li><i className='fa fa-info' /> More Games are beeing made</li>
                                </ul>
                                <h3>To see your score, go to the <Link to="/Leaderboard">leaderboard</Link></h3>
                            </div>
                            <div class="container-2 float-children">
                                <h2>User Settings</h2>
                                <ul>
                                    <li><Link to="/User"><i className="fa fa-cog"/>&ensp; Account Settings</Link></li>
                                    <li><Link to="/" onClick={this.logOut}><i className="fa fa-sign-out"/> &ensp;LogOut</Link></li>
                                </ul>
                            </div>
                        </div>
                         <hr />
                    </div>
                </>
            )
        }
    }
}


export default Home;