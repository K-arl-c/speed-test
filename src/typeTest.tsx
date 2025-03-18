import { generate } from 'random-words';
import React from 'react';


const GenerateParagraph = () => {

const paragraph = generate({exactly:100,join:" "})

const splitParagraph = paragraph.split(" ")

console.log(splitParagraph)

return(
    <div id='generatedText'>
    {splitParagraph.map((word,index)=>
    <div key={index}>{word}</div>
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