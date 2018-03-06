import React from 'react';


const Question = ({text, image, numero, answer, onChange}) => (
  <div>
    Question: {text} Image: {image}
    <input value={answer} onChange={onChange} name={`numero-${numero}`} />
  </div>
)


export default Question