import React from 'react';
import TitleLine from './titleLine.js';

let AboutThisGame = (props)=>{

  return(
   <TitleLine title="ABOUT THIS GAME">
      {props.gameData.aboutInfo.split('\n').map((line) => {
          return(<div><p className="aboutParagraph">{line}</p></div>)
        })}
   </TitleLine>
  );
}

export default AboutThisGame;