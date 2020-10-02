import React from 'react';
import DarkBox from './darkBox.js';
import '../css/infoPannel.css';
import ButtonLink from './buttonlink.js';
import PannelBar from './pannelBar.js';

let InfoPannel = (props)=>{
  return(
    <DarkBox>
      <div className="infoPanTitleSet">
  <span className="infoPanTitle">TITLE: <span className="infoPanText">{props.gameData.title}</span></span>
      </div>
      <div className="infoPanTitleSet">
  <span className="infoPanTitle">GENRE: {props.gameData.genre.map((item)=><ButtonLink key={item} text={item}/>)}</span>
      </div>
      <div className="infoPanTitleSet">
        <span className="infoPanTitle">DEVELOPER: <ButtonLink text={props.gameData.developer}/></span>
      </div>
      <div className="infoPanTitleSet">
        <span className="infoPanTitle">PUBLISHER: <ButtonLink text={props.gameData.publisher}/></span>
      </div>
      <div className="infoPanTitleSet">
  <span className="infoPanTitle">RELEASE DATE: <span className="infoPanRD">{props.gameData.releaseDate}</span></span>
      </div>
      <div className="IPPanBarContainer">
          <PannelBar text="View update history"/>
          <PannelBar text="Read related news"/>
          <PannelBar text="View discussions"/>
          <PannelBar text="Find Community Groups"/>
      </div>
    </DarkBox>
  )
}


export default InfoPannel;