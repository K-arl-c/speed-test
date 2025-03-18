import { generate } from 'random-words';
import React from 'react';
import './typeTest.css';


const GenerateParagraph = () => {

const paragraph = generate({exactly:100,join:" "})

const splitParagraph = paragraph.split(" ")

console.log(splitParagraph)

return(
    <div id='generatedTextContainer'>
    {splitParagraph.map((word,index)=>
    <div key={index} className='word'>{word}</div>
)}
    </div>

)






    // return(
    //     <>
    //     <div>{paragraph}</div>
    //     </>
    // )
}

export default GenerateParagraph;