import React from 'react';
import '../css/darkBox.css';


let DarkBox = (props) =>{
  return (
    <div className={props.className||"darkbox"}>
      {props.children}
    </div>
  )
}

export default DarkBox;

