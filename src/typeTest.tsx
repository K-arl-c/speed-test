import { generate } from 'random-words';
import React, { use, useRef, useState } from 'react';
import './typeTest.css';
import UserInput from './userInput';


const GenerateParagraph = () => {

const [paragraph] = useState(generate({exactly:100,join:" "}))
const splitParagraph = paragraph.split(" ")

const [userInput, setUserInput] = useState("");
const [currentWordIndex, setCurrentWordIndex] = useState(0);

const handleUserTyping = (typedText) =>{
    if(typedText.trim() === splitParagraph[currentWordIndex] && typedText.endsWith(" ")){
        let currentWordDiv = document.getElementById("word"+currentWordIndex);
        currentWordDiv!.className += " completed"
        setCurrentWordIndex(currentWordIndex+1);
        setUserInput("")
    } else{
        setUserInput(typedText);
    }
};

return(
    <>    
    <div id='generatedTextContainer'>
    {splitParagraph.map((word,wordIndex)=>(
    <div key={wordIndex} className='word' id={`word`+wordIndex}>
    {word.split("").map((letter, letterIndex) => {
    let letterClass;
        if (wordIndex === currentWordIndex) {
                if (letterIndex < userInput.length) {
                  letterClass = userInput[letterIndex] === letter ? "correct" : "incorrect";
                }
              }
 return (
                <span key={letterIndex} className={letterClass}>
                  {letter}
                </span>
              );
            })}
            &nbsp;
          </div>
        ))}
      </div>

      <UserInput words={splitParagraph} onUserType={handleUserTyping}/>
    </>
  );
};

export default GenerateParagraph;