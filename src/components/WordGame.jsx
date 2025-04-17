import React from "react";
import { useState } from "react";
import GuessedWord from "./GuessedWord";

function WordGame(props) {

  // TODO: Modify initialization
  const [prevGuesses, setPrevGuesses] = useState(["GUESS"]);

  // TODO: Add other state variables
  const wordToGuess = props.word;
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessNum, setGuessNum] = useState(1);
  const [correctGuess, setCorrectGuess] = useState(false);

  function handleKeyDown(event) {
    // TODO: Complete this function
    // Append currentGuess to prevGuesses and set currentGuess to empty string when 
    // user presser enter and the currentGuess is 5 characters long
    if (event.key === "Enter" && currentGuess.length === 5) {
      // Check if the guess is correct
      if (currentGuess.toLowerCase() === wordToGuess.toLowerCase()) {
        setCorrectGuess(true);
      }
      // Remove "GUESS" from prevGuesses
      if (prevGuesses[0] === "GUESS") {
        setPrevGuesses([currentGuess]);
      } else {
        setPrevGuesses([...prevGuesses, currentGuess]);
      }
      setCurrentGuess("");
      setGuessNum(guessNum + 1);
    }
  }

  function handleChange(event) {
    // TODO: Complete this function
    // set currentGuess to uppercase of what user enters
    setCurrentGuess(event.target.value.toUpperCase());
  }

  // Calculate the number of tries
  const numTries = prevGuesses[0] === "GUESS" ? 0 : prevGuesses.length;

   return (
    <>
      {prevGuesses.map((guess, index) => (
        <p key={index}>
          <GuessedWord 
            word={guess} 
            guessNum={index}
            wordToGuess={wordToGuess}
          />
        </p>
      ))}
        <p>
          { /* TODO: If guess is correct, show congratulations message */ }
          {correctGuess ? (
            `Congratulations! It took you ${numTries === 1 ? '1 try' : `${numTries} tries`}.`
          ) : (
            <>
              { /* TODO: Modify label text and add necessary attributes to <input> */ }
              <label htmlFor="word-entry">Guess {guessNum}:</label>
              <input type="text"
                id="word-entry"
                size="5"
                maxLength="5" 
                value={currentGuess}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
              />
            </>
          )}
        </p>
    </>
  );
}

export default WordGame;