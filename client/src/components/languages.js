import React from 'react';
import DarkBox from './darkBox.js';
import LanguageItem from './languageItem.js';
import '../css/languages.css';

class Languages extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    }
    this.renderLanguages = this.renderLanguages.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.expand = this.expand.bind(this);
  }

  renderLanguages(){
    let lang = this.props.gameData.languages;
    if(!this.state.expanded){
      lang = lang.slice(0, 5);
    }

    return lang.map((data)=>{
      return <LanguageItem key={data.languageName} gameData={data}/>
    })
  }

  renderButton(){
    if (!this.state.expanded) {
      return <button className="linkbtn" onClick={()=>{this.expand()}}>{`See all ${this.props.gameData.languages.length} supported languages`}</button>
    }
    return null;
  }

  expand(){
    this.setState({
      expanded: true
    })
  }

  render(){
    return(
      <DarkBox key = 'key1'>
         <span id="langHeader">Languages:</span>
          <div className="row borderBottom langItemContainer">
            <div className="flex2"></div>
            <div className="flex1 centerText setGreyish noBottomPadding">Interface</div>
            <div className="flex1 centerText setGreyish noBottomPadding">Full Audio</div>
            <div className="flex1 centerText setGreyish noBottomPadding">Subtitles</div>
          </div>
          {this.renderLanguages()}
          {this.renderButton()}
      </DarkBox>
    )
  }

}

export default Languages;