import React from 'react';


let PannelBar = (props)=>{
  if(props.icon){
    return(
      <div id="pannelbar">
        <div id="iconBox">{props.icon}</div><div id="PBText">{props.text}</div>
      </div>
    )
  }
  return(
    <div id="pannelbar">
        <div id="PBText">{props.text}</div>
      </div>
  )
}

export default PannelBar;