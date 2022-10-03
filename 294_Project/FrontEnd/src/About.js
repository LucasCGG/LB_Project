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
                    About this Project.
                </h1>

                <div className='spacer'>

                </div>
                <div id='footer'>
                    <hr />
                    <p>
                        The project is a performance evaluation for the modules "294 Realize frontend of an interactive web application" and "295 Realize backend for applications".
                    </p>
                    <br />
                    <p>
                        This project was created with MAVEN, ReactJS and HTML/CSS.
                    </p>
                    <br />
                    <p id="prDownload">
                        Press&ensp;
                        <a href={downloadLink} download="projectdokumentation.pdf">here</a>
                        &ensp;to download the project documentation
                    </p>
                    <hr/>
                </div>
            </>
        )
    }
}

export default About;