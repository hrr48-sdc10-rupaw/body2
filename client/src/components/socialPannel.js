import React from 'react';
import DarkBox from './darkBox.js';
import '../css/socialPannel.css';

let SocialPannel = (props)=>{
  return(
  <DarkBox>
    <div className="socPanBtnContainer">
      <button className="socPanBtn">Share</button>
      <button className="socPanBtn">Embed</button>
      <button className="socPanBtn"><img alt="flag" className ="flagIcon" src="https://s3.us-east-2.amazonaws.com/images.for.hrr/flags.svg"/></button>
    </div>
  </DarkBox>
  )
}

export default SocialPannel;