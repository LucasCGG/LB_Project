import React from 'react';
import App from './App.js'


import './Styles/User.css'

class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        var usernameValid;
        var emailValid;
        this.state = {
            username: '',
            name: '',
            email: '',
            password: '',
            age: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/Player/one/?username=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                let output = document.querySelector('#output');

                const uBox = document.getElementById("usernameBox");

                const rand1 = document.querySelector("#BoxTopUsername");
                const rand2 = document.querySelector("#BoxRightUsername");
                const rand3 = document.querySelector('#BoxFrontUsername');

                let data = json.username.toLowerCase();
                let username = event.target.value.toLowerCase();

                if (json.username === username) {
                    rand1.style.background = "red";
                    rand2.style.background = "red";
                    rand3.style.background = "red";
                    uBox.classList.add("false");

                    output.innerHTML = "Username is already used." + "<br>" + "Please choose a different Username.";

                    this.usernameValid = false;

                }
                else {
                    rand1.style.background = "rgba(255, 255, 255, 0.5)";
                    rand2.style.background = "rgba(255, 255, 255, 0.5)";
                    rand3.style.background = "rgba(255, 255, 255, 0.5)";
                    uBox.classList.remove("false");
                    this.usernameValid = true;
                }
            });
        this.setState({ username: event.target.value });
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleEmail(event) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/Player/one/Email/?email=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {
                let output = document.querySelector('#output');

                const eBox = document.getElementById("emailBox");


                const rand1 = document.querySelector("#BoxTopEmail");
                const rand2 = document.querySelector("#BoxRightEmail");
                const rand3 = document.querySelector('#BoxFrontEmail');
                let data;
                if (json != null) {
                    data = json.email.toLowerCase();
                }
                let email = event.target.value.toLowerCase();

                if (data == email) {
                    rand1.style.background = "red";
                    rand2.style.background = "red";
                    rand3.style.background = "red";
                    eBox.classList.add("false");

                    this.emailValid = false;


                    output.innerHTML = "E-Mail is already used." + "<br>" + "Please use a different E-Mail.";
                }
                else {
                    rand1.style.background = "rgba(255, 255, 255, 0.5)";
                    rand2.style.background = "rgba(255, 255, 255, 0.5)";
                    rand3.style.background = "rgba(255, 255, 255, 0.5)";
                    eBox.classList.remove("false");
                    output.innerHTML = null;
                    this.emailValid = true;
                }
            });
        this.setState({ email: event.target.value });
    }
    handleAge(event) {
        this.setState({ age: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.usernameValid && this.emailValid) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state)
            }
            fetch("http://localhost:8080/Player/add/", requestOptions)
                .then(response => response.json())
                .then(json => {
                    console.log(json.data);
                });
        }
    }

    render() {
        return (
            <>
                <form autoComplete='on' onSubmit={this.handleSubmit} className="login-form">
                    <div className="control">
                        <h1 className="form-title">
                            Sign Up
                        </h1>

                        <div class='control block-cube block-input' id="usernameBox">
                            <input placeholder='Username' type="text" value={this.state.username} onChange={this.handleUsername}></input>
                            <div class='bg-top' id='BoxTopUsername'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right' id='BoxRightUsername'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg' id='BoxFrontUsername'>
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <div class='control block-cube block-input'>
                            <input placeholder='Name' type="text" value={this.state.name} onChange={this.handleName}></input>
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
                        <div class='control block-cube block-input' id="emailBox">
                            <input placeholder='E-Mail' type="text" value={this.state.email} onChange={this.handleEmail}></input>
                            <div class='bg-top' id='BoxTopEmail' >
                                <div class='bg-inner' ></div>
                            </div>
                            <div class='bg-right' id="BoxRightEmail">
                                <div class='bg-inner' ></div>
                            </div>
                            <div class='bg' id="BoxFrontEmail">
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <div class='control block-cube block-input'>
                            <input placeholder='Age' type="number" value={this.state.age} onChange={this.handleAge}></input>
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
                                Sign Up
                            </div>
                        </button>
                        <h3 id="output">
                        </h3>
                    </div>
                </form>
            </>
        )
    }
}

export default UserRegister;