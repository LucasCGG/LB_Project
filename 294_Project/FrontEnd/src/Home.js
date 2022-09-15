import React from 'react';

import './Styles/Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>
                    Wilkommen zu meinem Projekt!
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

export default Home;