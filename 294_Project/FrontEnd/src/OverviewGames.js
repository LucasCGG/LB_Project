import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Games.css';

let games = [];

class OverviewGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
        this.handleSearch = this.handleSearch.bind(this);
    }



    handleSearch(event) {
        var x = document.getElementById("Output-addGame");
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/game/search/?name=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                for (var i = 0; i < json.length; i++) {
                    if (games.includes(json[i].name)) {
                        break;
                    }
                    games.push(json[i].name);
                    x.classList.add("noDisplay");
                }
                console.log(json);
                if (json.length == 0) {
                    games = [];
                    x.classList.remove("noDisplay");
                }

            });

        if (event.target.value == "") {
            games = [];
        }

        this.setState({ search: event.target.value });
    }


    render() {

        return (
            <>
                <h1>
                    Overview Games
                </h1>

                <div className='spacer'>

                </div>
                <div id='footer'>
                    <hr />
                    <div>
                        <input placeholder='search game...' value={this.state.search} onChange={this.handleSearch}></input>

                        <p id="Output-addGame" className='noDisplay'>It seems like that Game does not exist yet, Would you want to <Link to="/AddGame">Add</Link></p>

                        <div id="input_search">
                            <ul>
                                {games.map(games => <li>{games}</li>)}
                            </ul>
                        </div>
                    </div>
                    <hr />
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

export default OverviewGame;