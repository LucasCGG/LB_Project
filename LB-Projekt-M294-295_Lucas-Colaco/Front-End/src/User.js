import React from 'react';
var x;
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
            name: "",
            email: "",
            age: "",
            password: ""
        }

        this.handleSubmitRemove = this.handleSubmitRemove.bind(this);
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }


    componentDidMount() {
        this.setState({
            id: this.props.appState.user_id,
            name: this.props.appState.name,
            username: this.props.appState.username,
            age: this.props.appState.age,
            email: this.props.appState.email,
            password: this.props.appState.password
        })

        document.getElementById("input1").value = this.props.appState.username;
        document.getElementById("input2").value = this.props.appState.name;
        document.getElementById("input3").value = this.props.appState.age;
        document.getElementById("input4").value = this.props.appState.email;
        document.getElementById("input5").value = "";
    }

    handleSubmitRemove(event) {
        event.preventDefault();
        var y = document.getElementById("output");

        const requestOptionsPost = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };

        fetch("http://localhost:8080/Player/del/?id=" + this.props.appState.user_id, requestOptionsPost)
            .then(response => response)
            .then(json => {
                console.log(json.data);

                if (json.status === 200) {
                    y.innerHTML = "Your Account was successfully deleted";
                    this.setSuccess();
                    this.props.changeState({
                        logedIn: false,
                        user_id: "",
                        username: "",
                        name: "",
                        email: "",
                        age: ""
                    });
                    setTimeout(1000);

                    window.location.replace("/");
                }
                else if (json.status !== 200) {
                    y.innerHTML = "Something went wrong... please try again later";
                }
            });
    }


    resetFormular(){
        this.setState({
            id: this.props.appState.user_id,
            name: this.props.appState.name,
            username: this.props.appState.username,
            age: this.props.appState.age,
            email: this.props.appState.email,
            password: this.props.appState.password
        })

        document.getElementById("input1").value = this.props.appState.username;
        document.getElementById("input2").value = this.props.appState.name;
        document.getElementById("input3").value = this.props.appState.age;
        document.getElementById("input4").value = this.props.appState.email;
        document.getElementById("input5").value = "";
    }


    setSuccess() {
        x = document.getElementById("removeUserButton");

        x.classList.add("success");
    }

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }
    handleName(event) {
        this.setState({ name: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleAge(event) {
        this.setState({ age: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });

    }
    handleSubmitChange(event) {


        let output = document.getElementById('output');

        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state)
        }
        fetch("http://localhost:8080/Player/add/", requestOptions)
            .then(response => response.json())
            .then(json => {
                var x = JSON.stringify(json);
                output.innerHTML = x;
            })
            .catch(SyntaxError => {
                console.log(SyntaxError);
                window.location.replace("/");
            });
            this.resetFormular();
    }


    render() {
        return (
            <>
                <h1>
                    {this.props.appState.username}
                </h1>
                <div className='spacer'>
                </div>
                <div id='footer'>
                    <hr />
                    <p>
                        You dont want to have this account anymore?... <br />Then Press the big red Button.&ensp;&ensp;<i className='fa fa-arrow-right'></i>
                    </p>
                    
                    <form id="removeUser" autoComplete='off' onSubmit={this.handleSubmitRemove}>
                        <button id="removeUserButton" class='button' type='submit'>
                            <span> remove </span>
                            <div class="icon">
                                <i className='fa fa-remove'></i>
                                <i className="fa fa-check"></i>
                            </div>
                        </button>
                    </form>
                    <hr />
                    <p id="output"></p>
                    <hr />
                    <p>
                        Did you forget your password again? <br /> Or do you just want to change the data we save about you?<br /><i className='fa fa-arrow-down'></i>
                    </p>
                    <div class="changeUserForm">
                        <h2 id="changeUserFomOutput">Magic Form to change your Data</h2>
                        <form id="changeUser" autoComplete='off' onSubmit={this.handleSubmitChange}>
                            <input id="input0" type="text" name="field0" placeholder={this.state.id} readOnly="true"/>
                            <input id="input1" type="text" name="field1" placeholder="Username" onChange={this.handleUsername} />
                            <input id="input2" type="text" name="field2" placeholder="Name" onChange={this.handleName} />
                            <input id="input3" type="text" name="field3" placeholder="Age" onChange={this.handleAge} />
                            <input id="input4" type="email" name="field4" placeholder="Email" onChange={this.handleEmail} />
                            <input id="input5" type="password" name="field5" placeholder="Password" onChange={this.handlePassword} />
                            <input type="submit" value="Change it" />
                        </form>
                    </div>
                    <hr />
                </div>
            </>
        )
    }
}



export default User;