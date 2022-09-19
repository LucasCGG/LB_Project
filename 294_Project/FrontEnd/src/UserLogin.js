import React from 'react';


import './Styles/User.css'


class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            email: "" ,
            password: '',
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    componentDidMount() {
        if (this.state.board == null || this.state.board.length == 0) {
            fetch("http://localhost:8080/Player/One")
                .then(response => response.json())
                .then(data => this.setState({ board: data }));
        }
    }

    handleSubmit(event) {
        event.preventDefault();


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        };

        fetch("http://localhost:8080/login", requestOptions)
            .then(response => response.json())
            .then(json => {
                console.log(json.data);
            });
    }

    render() {
        return (
            <>
                <form autoComplete='on' onSubmit={this.handleSubmit} className="login-form">
                    <div className="control">
                        <h1 className="form-title">
                            Login
                        </h1>
                        <div class='control block-cube block-input'>
                            <input placeholder='E-Mail' type="text" value={this.state.email} onChange={this.handleEmail}></input>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <div class='control block-cube block-input'>
                            <input placeholder='Password' type="password" value={this.state.password} onChange={this.handlePassword}></input>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <button class='btn block-cube block-cube-hover' type='submit'>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='text'>
                                Log In
                            </div>
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default UserLogin;