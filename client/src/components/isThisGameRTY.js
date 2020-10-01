import React from 'react';
import DarkBox from './darkBox.js';
import '../css/ITGRTY.css';

let ITGRTY = (props)=> {
  return(
    <div>
      <DarkBox className="RTYheaderBox">
        <div className="RTYtitle">Is this game relevant to you?</div>
      </DarkBox>


    <DarkBox>
      <p className="RTYpara">Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.</p>
      <div className="RTYbtn-container">
        <button className="RTYbtn">Sign in</button> or <button className="RTYbtn">Open in Moist-Air</button>
      </div>
    </DarkBox>
    </div>
  )
}

export default ITGRTY;