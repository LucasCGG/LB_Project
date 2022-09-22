import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/404.css'

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <><body className='notFound'>
                <section class="notFound">
                    <div class="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </div>
                    <div class="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <a href="/" class="yes">YES</a>
                    </div>
                </section>
            </body>
            </>
        )
    }
}

export default NotFound;