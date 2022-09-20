import React from 'react';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/Player/One")
            .then(response => response.json())
            .then(data => this.setState({ board: data }));

    }
    render() {
        return (
            <>
                <h1>
                    Wilkommen
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

export default User;