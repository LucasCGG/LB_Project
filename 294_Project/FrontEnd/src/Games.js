import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Games.css';

var gameNameValid;
const games = [];

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            player:{
                id: this.props.appState.user_id
            }
        }
        this.handleGameName = this.handleGameName.bind(this);
        this.handleGameDescription = this.handleGameDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleGameName(event) {
        var test = document.getElementById("input_G_Name");

        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/game/one/?name=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                let name = event.target.value.toLowerCase();

                if (json.name === name) {
                    test.style.backgroundColor = "red";
                    gameNameValid = 0;
                }
                else if (json.name === null) {
                    test.style.backgroundColor = "green";
                    gameNameValid = 1;
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
        event.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        }
        fetch("http://localhost:8080/game/add/", requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json.data);
            });
    }



    handleSearch(event) {
        var x = document.getElementById("input_search");
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/game/search/?name=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                for(var i=0;i < json.length;i++){
                    if(games.includes(json[i].name)){
                        break;
                    }
                    games.push(json[i].name);
                    console.log(...games);
                }
                
            });

        this.setState({ search: event.target.value });
    }


    render() {
        
        if (this.props.appState.logedIn) {
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
                                <form autoComplete='off' onSubmit={this.handleSubmit}>
                                    <label>
                                        Add your game
                                    </label>
                                    <input id="input_G_Name" placeholder="Name" type="text" value={this.state.game_name} onChange={this.handleGameName} />
                                    <input placeholder="Description" type="text" value={this.state.game_desc} onChange={this.handleGameDescription} />
                                    <button type="submit">Add Game</button>
                                </form>
                            </div>
                        </div>
                        <hr />
                        <hr />
                        <div>
                            <input placeholder='search game...' value={this.state.search} onChange={this.handleSearch}></input>
                            <div id="input_search">
                                <ul>
                                    {games.map(games => <li>{games}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className='games-container'>
                            <div>
                                <Link to="/Snake">Snake</Link>
                                <img src="../public/img/Games/snake.jpg" />
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
                        <h2>Please Log in or Register to add a game</h2>
                        <div>
                            <ul className="container-link">
                                <Link to="/UserLogin">Log in</Link>
                                <Link to="/UserRegister">Register</Link>
                            </ul>
                        </div>
                        <hr />
                        <hr />
                        <div className='games-container'>
                            <input placeholder='search game...' value={this.state.search} onChange={this.handleSearch}></input>
                            <div id="input_search">
                                <ul>
                                    {games.map(games => <li>{games}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className='games-container'>
                            <div>
                                <Link to="/Snake">Snake</Link>
                                <img src="../public/img/Games/snake.jpg" />
                            </div>
                        </div>
                        <hr />
                    </div>
                </>
            )
        }
    }
}

export default Games;