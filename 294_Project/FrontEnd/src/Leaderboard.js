import React from 'react';
import './Styles/Leaderboard.css'


class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [],
            newBoard: {
                score: this.props.appState.score,
                game: {
                    id: this.props.appState.game_id
                },
                player: {
                    id: this.props.appState.user_id
                }
            }
        }
        this.updateBoard = this.updateBoard.bind(this);
    };


    updateBoard(event) {
        const requestOptionsPost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.newBoard)
        };
        fetch("http://localhost:8080/Leaderboard/add/", requestOptionsPost)
            .then(response => response)
            .then(json => {
                console.log(json);
            });
    }



    componentDidMount(event) {
        for (var i = 0; i < 1; i++) {
            this.updateBoard(event);
        }


        if (this.state.board === null || this.state.board.length === 0) {
            fetch("http://localhost:8080/Leaderboard/")
                .then(response => response.json())
                .then(data => {

                    const data1 = [...data].sort((a, b) => (a.score < b.score ? 1 : -1));

                    this.setState({ board: data1 })
                });
        }
    }


    render() {
        const Leaderboard = this.state.board.map((e, i) => {
            return (< tr key={i}>
                <td className='board-data'>{i + 1}</td>
                <td className='board-data'>{e.score}</td>
                <td className='board-data'>{e.player.username}</td>
                <td className='board-data'>{e.game.name}</td>
            </tr>
            )
        })


        return (
            <>
                <h1>
                    Leaderboard
                </h1>
                <div className='spacer'>
                </div>
                <div className='board-header'>
                    <table cellPadding={0} cellSpacing={0} border="0">
                        <thead>
                            <tr>
                                <th className="board-titles">Rank</th>
                                <th className="board-titles">Score</th>
                                <th className="board-titles">Player</th>
                                <th className="board-titles">Game</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="board-content">
                    <table cellPadding={0} cellSpacing={0} border="0">
                        <tbody>{Leaderboard}</tbody>
                    </table>
                </div>
            </>


        )

    }
}

export default Leaderboard;