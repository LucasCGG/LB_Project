import React from 'react';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            player: []
        };
    }


    componentDidMount() {
        if (this.state.player == null || this.state.player.length == 0) {
        fetch("http://localhost:8080/Player/all/")
                .then(response => response.json())
                .then(data => this.setState({ player: data }));
        }
    }


    render() {
        const result = this.state.player.map((e, i) => {
            return (< tr key={i}>
                <th>{e.id}</th>
                <th>{e.username}</th>
                <th>{e.name}</th>
                <th>{e.email}</th>
                <th>{e.age}</th>
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
                <div id='footer'>
                    <hr />

                    <p>Modul 295 & 294</p>
                    <p>Von: Lucas Colaço</p>
                    <hr />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>{result}</tbody>
                </table>
            </>
        )
    }
}

export default Leaderboard;