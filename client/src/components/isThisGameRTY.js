import React from 'react';
import DarkBox from './darkBox.js';

let ITGRTY = (props)=> {
  return(
    <DarkBox>
      <h3>Is this game relevant to you?</h3>
      <p>Sign in to see reasons why you may or may not like this based on your games, friends, and curators you follow.</p>
      <div>
        <button>Sign in</button> or <button>Open in Moist-Air</button>
      </div>
    </DarkBox>
  )
}

export default ITGRTY;