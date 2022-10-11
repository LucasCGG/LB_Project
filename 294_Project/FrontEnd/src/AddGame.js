import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Games.css';

var gameNameValid;
const games = [];

class AddGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            player: {
                id: this.props.appState.user_id
            }
        }
        this.handleGameName = this.handleGameName.bind(this);
        this.handleGameDescription = this.handleGameDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleGameName(event) {
        var x = document.getElementById("input_G_Name");
        var y = document.getElementById("Output");

        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/game/one/?name=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                let name = event.target.value.toLowerCase();

                if (json.name.toLowerCase() === name) {
                    x.style.backgroundColor = "red";
                    this.gameNameValid = false;
                    y.style.color="black";
                    y.innerHTML="The Name you tried to use is already used"
                }
                else {
                    x.style.backgroundColor = "green";
                    this.gameNameValid = true;
                    y.innerHTML="";

                }
            });
        this.setState({
            name: event.target.value
        });
    }

    handleGameDescription(event) {
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        var y = document.getElementById("Output");

        if (this.gameNameValid === true) {
            event.preventDefault();
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state)
            }
            fetch("http://localhost:8080/game/add/", requestOptions)
                .then(response => response.json())
                .then(json => {
                });
                y.style.color="black";
                y.innerHTML="Your game was successfully addet.";
        }
    }


    render() {

        if (this.props.appState.logedIn) {
            return (
                <>

                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <div className="contact-us-container">
                            <div className="contact-us">
                                <form autoComplete='off' onSubmit={this.handleSubmit} className="form-container">
                                    <label>
                                        Add your game
                                    </label>
                                    <h3 class="info">Please note that youre just entering the informations to the Library and not the Game itself.</h3>
                                    <input id="input_G_Name" placeholder="Name" type="text" value={this.state.game_name} onChange={this.handleGameName} />
                                    <input placeholder="Description" type="text" value={this.state.game_desc} onChange={this.handleGameDescription} />
                                    <button type="submit">Add Game</button>
                                </form>
                                <p id="Output"></p>
                            </div>
                        </div>
                        <hr />
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='spacer'>

                    </div>
                    <div id='footer'>
                        <hr />
                        <h2>Please Log in or Sing Up to add a game</h2>
                        <div>
                            <ul className="container-link">
                                <Link to="/UserLogin">Log in</Link>
                                <Link to="/UserRegister">Sign Up</Link>
                            </ul>
                        </div>
                        <hr />

                    </div>
                </>
            )
        }
    }
}

export default AddGame;