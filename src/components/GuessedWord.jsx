import React from "react";

function GuessedWord(props) {
  const word = props.word;
  const guessNum = props.guessNum;
  const wordToGuess = props.wordToGuess;

  // TODO: Use different key and proper className
  return (
    <>
        {word.split("").map((letter, index) => {
          let className = "not-part"; //grey
          if (letter.toLowerCase() === wordToGuess[index]?.toLowerCase()) {
            className = "correct"; //green
          } else if (wordToGuess.toLowerCase().includes(letter.toLowerCase())) {
            className = "wrong-place"; //yellow
          }
          return (
              <span 
                key={`${guessNum}-${index}`}
                className={className}>
                {letter}
              </span>
          );
        })}
    </>
  );
}

export default GuessedWord;
