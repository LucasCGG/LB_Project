import React from 'react';


import './Styles/User.css'

class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: '',
            tempPW: '',
            ok: '',
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmail(event) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }

        fetch("http://localhost:8080/Player/one/Email/?email=" + event.target.value, requestOptions)
            .then(response => response.json())
            .then(json => {


                const rand1 = document.querySelector("#BoxTopEmail");
                const rand2 = document.querySelector("#BoxRightEmail");
                const rand3 = document.querySelector('#BoxFrontEmail');
                let data;
                if (json != null) {
                    data = json.email.toLowerCase();
                }
                let email = event.target.value.toLowerCase();

                if (data === email) {
                    rand1.style.background = "green";
                    rand2.style.background = "green";
                    rand3.style.background = "green";

                    this.emailValid = false;


                }
                else {
                    rand1.style.background = "rgba(255, 255, 255, 0.5)";
                    rand2.style.background = "rgba(255, 255, 255, 0.5)";
                    rand3.style.background = "rgba(255, 255, 255, 0.5)";

                    this.emailValid = true;
                    this.setState({
                        tempPW: json.password
                    })
                }
            });

        this.setState({ email: event.target.value });
    }



    handlePassword(event) {
        if (event.target.value === this.state.tempPW) {
            this.setState({
                ok: true
            })
        }
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.ok === true) {
            const requestOptionsPost = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state)
            };

            const requestOptionsGet = {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }

            fetch("http://localhost:8080/Player/login/?email=" + this.state.email + "&password=" + this.state.password, requestOptionsPost)
                .then(response => response)
                .then(json => {
                    console.log(json.data);
                    console.log()

                    if (json.status === 200) {

                        fetch("http://localhost:8080/Player/one/Email/?email=" + this.state.email, requestOptionsGet)
                            .then(response => response.json())
                            .then(json => {
                                this.props.changeState({
                                    logedIn: true,
                                    user_id: json.id,
                                    username: json.username,
                                    name: json.name,
                                    email: json.email,
                                });
                            });



                    }
                });
        }
    }

    render() {
        return (
            <>
                <form autoComplete='on' onSubmit={this.handleSubmit} className="login-form">
                    <div className="control">
                        <h1 className="form-title">
                            Login
                        </h1>
                        <div class='control block-cube block-input' id="eBox">
                            <input placeholder='E-Mail' type="text" value={this.state.email} onChange={this.handleEmail}></input>
                            <div class='bg-top' id="BoxTopEmail">
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right' id="BoxRightEmail">
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg' id="BoxFrontEmail">
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