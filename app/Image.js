import React from 'react';

const Image = (props) => {
  return (
    <div id="cover">
      <img id="image" src={props.src} style={{opacity: props.opacity}}/>
    </div>
  )
}

export default Image