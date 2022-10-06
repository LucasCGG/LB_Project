import React from 'react';
import AddGame from './AddGame';

var x;

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: props.appState
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var y = document.getElementById("output");
        console.log(this.props.appState.user_id);

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
                }
                else if (json.status !== 200){
                    y.innerHTML = "Something went wrong... please try again later";

                }
            });

    }

    setSuccess() {
        x = document.getElementById("removeUserButton");

        x.classList.add("success");
    }


    render() {
        return (
            <>
                <h1>
                    {this.state.appState.username}
                </h1>
                <div className='spacer'>
                </div>
                <div id='footer'>
                    <hr />
                    <p>
                        You dont want to have this account anymore?... Then Press the big red Button. <br /> <i className='fa fa-arrow-down'></i>
                    </p>
                    <p id="output"></p>
                    <form id="removeUser" autoComplete='off' onSubmit={this.handleSubmit}>
                        <button id="removeUserButton" class='button' role="button" type='submit'>
                            <span> remove </span>
                            <div class="icon">
                                <i className='fa fa-remove'></i>
                                <i className="fa fa-check"></i>
                            </div>
                        </button>
                    </form>
                    <hr />
                </div>
            </>
        )
    }
}



export default User;