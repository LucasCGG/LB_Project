import React from 'react';
import { Link } from 'react-router-dom';
import './images/Games/snake.jpg';
import './Styles/Games.css';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game_name: '',
            game_desc: '',
            appState: this.props.appState
        }
        this.handleGameName = this.handleGameName.bind(this);
    }

    handleGameName(event) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/Player/one/?username=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                

                let name = event.target.value.toLowerCase();

                if (json.name === name) {

                    this.usernameValid = false;

                }
                else {
                   
                    this.usernameValid = true;
                }
            });
        this.setState({
            game_name: event.target.value
        });
    }

    handleGameDescription(event) {
        this.setState({
            game_desc: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.usernameValid && this.emailValid) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state,)
            }
            fetch("http://localhost:8080/game/add/", requestOptions)
                .then(response => response.json())
                .then(json => {
                    console.log(json.data);
                });
        }
    }

    render() {
        if (this.state.appState.logedIn) {
            return (
                <>
                    <h1>
                        Overview Games
                    </h1>

                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <div className="contact-us-container">
                            <div className="contact-us">
                                <form>
                                    <label>
                                        Add your game
                                    </label>
                                    <input placeholder="Name" required="" type="text" />
                                    <input name="Description" placeholder="Game Description" type="text" />
                                    <button type="button">Add Game</button>
                                </form>
                            </div>
                        </div>
                        <hr />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <h1>
                        Overview Games
                    </h1>

                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <h2>Please Log in to add a game</h2>
                        <hr />
                        <hr/>
                        <div className='games-container'>
                            <div>
                                <Link to="/Snake">Snake</Link>
                                <img src="./images/Games/snake.jpg"/>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </>
            )
        }
    }
}

export default Games;