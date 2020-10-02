import React from 'react';
import '../css/pannelBar.css';


let PannelBar = (props)=>{
  let icons = {
    achievements: ['https://s3.us-east-2.amazonaws.com/images.for.hrr/ico_achievements.png', 'Moist-Air Achievements'],
    partialControllersupport: ['https://s3.us-east-2.amazonaws.com/images.for.hrr/ico_partial_controller.png', 'Partial Controller Support'],
    remotePlay: ['https://s3.us-east-2.amazonaws.com/images.for.hrr/ico_remote_play_together.png', 'Remote Play Together'],
  };

  if(props.icon){
    let iconUrl = icons[props.text][0];
    let iconText = icons[props.text][1];
    return(
      <div id="pannelbar">
        <div className="PBimageContainer">
          <img alt="icon" src={iconUrl}className="PBicon"/>
        </div>
        <div className="PBTextContainer">
          <div id="PBText">{iconText}</div>
        </div>
      </div>
    )
  }
  return(
    <div id="pannelbar">
      <div className="PBTextContainer">
        <div id="PBText">{props.text}</div>
      </div>
    </div>
  )
}

export default PannelBar;