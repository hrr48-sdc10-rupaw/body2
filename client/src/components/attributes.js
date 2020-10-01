import React from 'react';
import PannelBar from './pannelBar.js';
import DarkBox from './darkBox.js';

let Attributes = (props)=>{
  let atts = props.gameData.attributes;

  return(
    <div id="attributes">
      <DarkBox key="key2">
      {Object.keys(atts).map((att) => {
        if(atts[att]){
          return <PannelBar key={att} text={att} icon="(X)"/>
        }
        return <div key={att}/>
      })}
      </DarkBox>
    </div>
  )
}

export default Attributes;