import React from 'react';
import style from '../css/darkBox.css';


let DarkBox = (props) =>{
  return (
    <div id="darkbox">
      {props.children}
    </div>
  )
}

export default DarkBox;