import React from 'react';
import style from '../css/titleLine.css';

let TitleLine = (props)=>{
return (
  <div id="containerATG">
      <h5>{props.title}</h5>
      <hr/>
      {props.children}
  </div>
)
}

export default TitleLine;


