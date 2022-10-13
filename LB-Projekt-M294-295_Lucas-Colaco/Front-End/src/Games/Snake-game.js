import React, { Component } from "react";
import "../Styles/Snake.css"

const HEIGHT = 10;
const WIDTH = 10;

// mapping keycode  for changing direction
const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const STOP = 32; /* [space] used for pause */


const getRandom = () => {
    return {
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT)
    }
}


const emptyRows = () => [...Array(WIDTH)].map((_) => [...Array(HEIGHT)].map((_) => 'grid-item'));


const increaseSpeed = (speed) => speed - 5 * (speed > 5)


const initialState = {
    game_id: 2,
    game_name: "Snake",
    score: 0,
    rows: emptyRows(),
    snake: [getRandom()],
    food: getRandom(),
    direction: STOP,
    speed: 125
}



class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.changeDirection;
    }

    componentDidUpdate() {
        this.isCollapsed();
        this.isEaten();
    }

    moveSnake = () => {
        let snakeCopy = [...this.state.snake];
        let head = { ...snakeCopy[snakeCopy.length - 1] };
        switch (this.state.direction) {
            case LEFT: head.y += -1; break;
            case UP: head.x += -1; break;
            case RIGHT: head.y += 1; break;
            case DOWN: head.x += 1; break;
            default: return;
        }
        /* keep the value within range of 0 to HEIGHT */
        head.x += HEIGHT * ((head.x < 0) - (head.x >= HEIGHT));
        head.y += WIDTH * ((head.y < 0) - (head.y >= WIDTH));

        snakeCopy.push(head);
        snakeCopy.shift()
        this.setState({
            snake: snakeCopy,
            head: head
        });
        this.update();
    }

    isEaten() {
        let snakeCopy = [...this.state.snake];
        let head = { ...snakeCopy[snakeCopy.length - 1] };
        let food = this.state.food;
        if ((head.x === food.x) && (head.y === food.y)) {
            snakeCopy.push(head);
            this.setState({
                score: this.state.score + 1,
                snake: snakeCopy,
                food: getRandom(),
                speed: increaseSpeed(this.state.speed)
            });
        }
    }

    update() {
        let newRows = emptyRows();
        this.state.snake.forEach(element => newRows[element.x][element.y] = 'snake')
        newRows[this.state.food.x][this.state.food.y] = 'food';
        this.setState({ rows: newRows });
    }

    isCollapsed = () => {
        let snake = this.state.snake;
        let head = { ...snake[snake.length - 1] }
        for (let i = 0; i < snake.length - 3; i++) {
            if ((head.x === snake[i].x) && (head.y === snake[i].y)) {
                this.setState(initialState);
                this.updateLeaderBoard();
            }
        }
    }

    changeDirection = ({ keyCode }) => {
        let direction = this.state.direction;
        switch (keyCode) {
            case LEFT:
                direction = (direction === RIGHT) ? RIGHT : LEFT;
                break;
            case RIGHT:
                direction = (direction === LEFT) ? LEFT : RIGHT;
                break;
            case UP:
                direction = (direction === DOWN) ? DOWN : UP;
                break;
            case DOWN:
                direction = (direction === UP) ? UP : DOWN;
                break;
            case STOP:
                direction = STOP;
                break;
            default:
                break;
        }
        this.setState({
            direction: direction
        });
    }


    render() {
        const displayRows = this.state.rows.map((row, i) => row.map((value, j) => <div name={`${i}=${j}`} className={value} />))
        return (
            <div className="a text" >
                <h1> Snake  v0.1.1</h1>
                <h3> Score: {this.state.score}</h3>
                <ul>
                    <li>Press "Space" to pause the game.</li>
                    <li>Press "Arrow keys" to change direction/unpause/start.</li>
                    <li>&ensp;</li>
                    <li>To upload your score to the Leaderboard you have to be loged in!</li>
                </ul>
                <div className="snake-container">
                    <div className="grid">{displayRows}</div>
                </div>
            </div>
        )
    }

    updateLeaderBoard() {
        const requestOptionsPost = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "score":this.state.score,
                "game":{
                    "id":2
                },
                "player":{
                    "id":this.props.appState.user_id
                }
            })
        }
        console.log(requestOptionsPost.body);
        fetch("http://localhost:8080/Leaderboard/add/", requestOptionsPost)
            .then(response => response)
            .then(json => {
            });
    }
}


export default App;