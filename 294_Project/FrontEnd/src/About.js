import React from 'react';
import downloadLink from '../src/download/Projectdokumentation.pdf';

import './Styles/About.css'


class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>
                    Was ist das Project?
                </h1>

                <div className='spacer'>

                </div>
                <div id='footer'>
                    <hr />
                    <p>
                        Das Projekt ist eine Leistungsbeurteillung für die Module "294 Frontend einer Interaktiven Webapplikation realisieren" und "295 Backend für Applikationen realisieren"
                    </p>
                    <br />
                    <p>
                        Dieses Projekt wurde mit MAVEN, ReactJS und HTML/CSS erstellt.
                    </p>
                    <br />
                    <p id="prDownload">
                        Drücke&ensp;
                       <a href={downloadLink} download="projectdokumentation.pdf">hier</a>
                       &ensp;um die Projektdokumentation zu downloaden
                    </p>

                    <hr />
                </div>
            </>
        )
    }
}

export default About;