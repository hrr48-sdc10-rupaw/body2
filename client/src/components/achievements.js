import React from 'react';
import DarkBox from './darkBox.js';
import '../css/achievements.css';

let Achievements = (props)=>{
  let ach = props.gameData.steamAcheivments.slice(0, 3);
  let lngth = props.gameData.steamAcheivments.length;
  return(
    <DarkBox key = "key3">
      <span className="achTitle">{`Includes ${ach.length} Moist-Air Achievements`}</span>
      <div className="achImgContainer">
          {ach.map((img)=><img key={img} className ="achImg" alt ="achivs"src={img}></img>)}
          <button className = "AchViewAllBtn">{`View all ${lngth}`}</button>
      </div>
    </DarkBox>
  )
}

export default Achievements;