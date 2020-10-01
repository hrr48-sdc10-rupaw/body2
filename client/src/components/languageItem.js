import React from 'react';


let LanguageItem = (props)=>{
  let iF = props.gameData.interface? '✔': ' ';
  let fA = props.gameData.fullAudio? '✔': ' ';
  let sT = props.gameData.subtitles? '✔': ' ';
  let lN = props.gameData.languageName;
  return (
      <div className="langItemContainer row borderBottom">
       <div className="flex2">{lN}</div><div className="flex1 centerText colorBlue">{iF}</div><div className="flex1 centerText colorBlue">{fA}</div><div className="flex1 centerText colorBlue">{sT}</div>
     </div>
  )
}

export default LanguageItem;