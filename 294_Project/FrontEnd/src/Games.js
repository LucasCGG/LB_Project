import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Games.css';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game_name: "",
            description: "",
            appState: this.props.appState,
            search: "",
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
                    this.gameNameValid = false;
                }
                else {
                    test.style.backgroundColor = "green";
                    this.gameNameValid = true;
                }
            });
        this.setState({
            game_name: event.target.value
        });
    }

    handleGameDescription(event) {
        console.log(this.state);
        this.setState({ description: event.target.value });
    }

    handleSubmit(event) {
        console.log("TEEEEEEEEEESTTTTTTTTTTTTTTTTTT");
        console.log(this.gameNameValid);
        event.preventDefault();
        if (this.gameNameValid) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state.game_name, this.state.description, this.state.appState.user_id)
                
            }
            fetch("http://localhost:8080/game/add/", requestOptions)
                .then(response => response.json())
                .then(json => {
                    console.log(json.data);
                });
        }
    }


    handleSearch(event){
        var x = document.getElementById("input_search");
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/game/search/?name=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                x.innerHTML = json[0].name;
            });

        this.setState({search: event.target.value});
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
                            <p id="input_search"></p>
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
                        <h2>Please Log in to add a game</h2>
                        <hr />
                        <hr />
                        <div className='games-container'>
                            <div>
                                <Link to="/Snake">Snake</Link>
                                <img src="./images/Games/snake.jpg" />
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