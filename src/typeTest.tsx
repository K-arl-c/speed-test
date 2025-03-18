import { generate } from 'random-words';
import React from 'react';
import './typeTest.css';
import UserInput from './userInput';


const GenerateParagraph = () => {

const paragraph = generate({exactly:100,join:" "})

const splitParagraph = paragraph.split(" ")

return(
    <>    
    <div id='generatedTextContainer'>
    {splitParagraph.map((word,index)=>
    <div key={index} className='word'>{word}</div>
)}
    </div>
    <UserInput words={splitParagraph}/>
    </>

)}

export default GenerateParagraph;