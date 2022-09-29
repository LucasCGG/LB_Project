import React from 'react';
import './Styles/Leaderboard.css'


class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: []
        };
    }




    componentDidMount(event) {
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