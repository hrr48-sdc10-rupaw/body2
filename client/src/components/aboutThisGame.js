import React from 'react';
import TitleLine from './titleLine.js';
import '../css/aboutthisgame.css';
let AboutThisGame = (props)=>{

  return(
   <TitleLine className="about" title="ABOUT THIS GAME">
      {props.gameData.aboutInfo.split('\n').filter((string)=>string!=='').map((line) => {
          return(<div key={line}><p className="aboutParagraph">{line}</p></div>)
        })}
   </TitleLine>
  );
}

export default AboutThisGame;