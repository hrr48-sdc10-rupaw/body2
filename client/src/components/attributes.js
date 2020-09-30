import React from 'react';
import PannelBar from './pannelBar.js';
import DarkBox from './darkBox.js';

let Attributes = (props)=>{
  let atts = props.gameData.attributes;

  return(
    <div id="attributes">
      <DarkBox>
      {Object.keys(atts).map((att) => {
        if(atts[att]){
          return <PannelBar text={att} icon="(X)"/>
        }
        return <div/>
      })}
      </DarkBox>
    </div>
  )
}

export default Attributes;