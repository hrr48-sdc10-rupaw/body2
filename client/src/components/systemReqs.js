import TitleLine from './titleLine.js';
import React from 'react';

let SystemReqs = (props)=>{
  return (
<TitleLine className="SREQ" title = "SYSTEM REQUIREMENTS">
      <div>
        <span id="minimum">MINIMUM:</span><br />
        <span><span className="reqName">OS: </span>{props.gameData.requirements.os}</span><br/>
        <span><span className="reqName">Processor: </span>{props.gameData.requirements.processor}</span><br></br>
        <span><span className="reqName">Memory: </span>{props.gameData.requirements.memory}</span><br></br>
        <span><span className="reqName">Graphics: </span>{props.gameData.requirements.graphics}</span><br></br>
        <span><span className="reqName">DirectX: </span>{props.gameData.requirements.directX}</span><br></br>
        <span><span className="reqName">Storage: </span>{props.gameData.requirements.storage}</span>
    </div>
</TitleLine>
  )
}

export default SystemReqs;

