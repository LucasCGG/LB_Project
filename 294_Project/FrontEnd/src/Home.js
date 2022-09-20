import React from 'react';
import App from './App';

import './Styles/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: props.appState
        }
    }

    render() {
        const player = App.state;
        console.log(App.state);
        if (this.state.appState.logedIn !== true) {
            if (this.state.appState.username === "") {
                return (
                    <>
                        <h1>
                            Wilkommen zu meinem Projekt
                        </h1>
                        <h2>
                            {player}
                        </h2>

                        <div className='spacer'>

                        </div>
                        <div id='footer'>
                            <hr />
                            <p>Modul 295 & 294</p>
                            <p>Von: Lucas Colaço</p>
                            <hr />
                        </div>
                    </>
                )
            }
        } else {
            return (
                <>
                    <h1>
                        Wilkommen, {this.state.appState.username}
                    </h1>
                    <h2>
                        {player}
                    </h2>

                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <p>Modul 295 & 294</p>
                        <p>Von: Lucas Colaço</p>
                        <hr />
                    </div>
                </>
            )

        }
    }
}

export default Home;