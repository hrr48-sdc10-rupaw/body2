import React from 'react';
import {shallow, configure} from 'enzyme';
import Languages from '../components/languages.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let mockData = {
  languages:[
    {
        languageName: "English",
        interface: false,
        fullAudio: false,
        subtitles: false
    },
    {
        languageName: "French",
        interface: true,
        fullAudio: false,
        subtitles: false
    },
    {
        languageName: "Italian",
        interface: true,
        fullAudio: false,
        subtitles: false
    },
    {
        languageName: "German",
        interface: true,
        fullAudio: true,
        subtitles: true
    },
    {
        languageName: "Spanish-Spain",
        interface: true,
        fullAudio: false,
        subtitles: true
    },
    {
        languageName: "Russian",
        interface: true,
        fullAudio: false,
        subtitles: false
    }
],
}


describe('LANGUAGES', function(){
  it('it should render correctly', ()=>{
    shallow(<Languages gameData={mockData}/>);
  })
})