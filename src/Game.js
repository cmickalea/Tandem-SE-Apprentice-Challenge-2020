import React, {useEffect, useState} from "react";
import data from "./Apprentice_TandemFor400_Data.json";
import "./game.css";

const Game = () => {
    const [round, setRound] = useState(1);
    const [selected, setSelected] = useState("");
    const [display, setDisplay] = useState("none");
    const [gameOver, setGameOver] = useState("block");
    const [gameDisplay, setGameDisplay] = useState("none");
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState(0);
    const [numArray, setNumArray] = useState([]);

    let answer = data[round].correct;

    // create an array of unique numbers to randomly select 10 questions for the game
    const generate = () => {
        let nums = [];
        let newArray = [];
        for(let i = 0; newArray.length <= 10; i++){
            let x = Math.floor(Math.random() * Math.floor(20));
            nums.push(x);
            newArray = [...new Set(nums)];
        }
        console.log(newArray);
        console.log();
        return newArray;
    }

    useEffect(() => {
        const numbers = generate();
        setNumArray([...numbers]);
    }, []);

    // create variable that selects the next number in numArray
    const iterateOverArray = () => {
        const newPosition = position + 1;
        setPosition(newPosition);
    }

    // identify the number of the question in the round
    const countQuestions = () => {
        const questionCount = count + 1;
        setCount(questionCount);
    }

    // hides answer to previous question
    // updates the question number
    // displays the next question
    const changeQuestion = () => {
        setDisplay("none");
        countQuestions();
        const next = numArray[position];
        setRound(next);
    }

    // hides the div that shows questions / answers
    const endGame = () => {
        const endTheGame = "none";
        setGameOver(endTheGame);
    }

    // updates user's score
    const displayScore = () => {
        const userScores = score + 1;
        setScore(userScores);
    }

    // changes display styling of game over div from none to block
    const gameOverDisplay = () => {
        const gameOverDivDisplay = "block";
        setGameDisplay(gameOverDivDisplay);
    }

    // displays game over div with new block display styling
    const showGameOver = () => {
        gameOverDisplay();
    }

    // changes display styling of answer from none to block
    const changeDisplay = () => {
        const blockDisplay = "block";
        setDisplay(blockDisplay);
    }

    //displays answer
    const showAnswer = () => {
        changeDisplay();
    }

    // updates number to be selected from array
    // adds a point to the user's score if selected answer matches correct answer
    // displays the correct answer
    // goes to next question unless the round is over (after 10 questions) in which case...
    // the game is ended and game-over div is displayed
    const clickSubmit = (event) => {
        event.preventDefault();
        console.log(selected);
        iterateOverArray();
        let answer = data[round].correct;
        console.log(answer);
        if(selected === answer){
            displayScore();
        }
        console.log(score);
        showAnswer();
        if(count === 9){
            console.log("game over");
            endGame();
            showGameOver();
            return;
        }
        setTimeout(changeQuestion, 1200);
    };

    return (
        <div>
            <h1 className="heading">Let's Play a Trivia Game !</h1>
                <div className="tips" style={{display: gameOver}}>
                    <h3>Important: If your intended answer is already selected, choose another option and then re-choose your intended answer to ensure a correct score count </h3>
            </div>
            <div className="card-container" style={{display: gameOver}}>
                <h1>Q{count + 1} : {data[round].question}</h1>
                <div className="choices">
                    <div className="radio">
                        <form onSubmit={clickSubmit}>
                            {data[round].incorrect.map((answer, i) => (
                                <div><label><input  type="radio" name="option" key={i} value={answer} onChange={event => setSelected(event.target.value)} required/>{answer}</label></div>
                            ))}

                            <div className="radio">
                                <label>
                                    <input type="radio" name="option" value={data[round].correct} onChange={event => setSelected(event.target.value)} />
                                    {data[round].correct}
                                </label>
                            </div>
                            <div className="submit">
                                <input type="submit" value="Next Question"/>
                            </div>
                        </form>
                        <div className="answer" style={{display: display}}>
                            {
                                answer && (
                                    <div><h1>Correct Answer : {answer}</h1></div>
                                )
                            }
                        </div>
                        <div>Score : {score} / 10 </div>
                    </div>
                </div>
            </div>
            <div className="game-over" style={{display: gameDisplay, color: "#961715"}}>
                <h1>Game Over , Thanks For playing !</h1>
                <h2>Your Final Score is : {score} /10</h2>
            </div>
        </div>
    )
}

export default Game;
