import React from 'react';

import './Styles/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: props.appState
        }
    }

    render() {
        console.log(this.state.appState);
        if (this.state.appState.logedIn === false) {
            return (
                <>
                    <h1>
                        Wilkommen zu meinem Projekt
                    </h1>


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
        else{
            return (
                <>
                    <h1>
                        Wilkommen {this.state.appState.username}
                    </h1>


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