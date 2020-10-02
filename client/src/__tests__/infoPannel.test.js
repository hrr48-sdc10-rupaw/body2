import React from 'react';
import {shallow, configure} from 'enzyme';
import InfoPannel from '../components/infoPannel.js';
import Adapter from 'enzyme-adapter-react-16';
import ButtonLink from '../components/buttonlink.js';
configure({ adapter: new Adapter() });


let mockData={
  developer: "Eliseo",
  title: "Hello Kitty and Sanrio Friends Racing",
  genre: [
    "Synergistic",
    "Small",
    "Human"
  ],
  publisher: "bioware",
  releaseDate: "hopefully never",
}



describe('INFOPANNEL COMPONENT', function(){
  it('it should render correctly', ()=>{
    shallow(<InfoPannel gameData = {mockData}/>);
  })
  it('should render all Genres correctly', ()=>{
    let body = shallow(<InfoPannel gameData = {mockData}/>);
    let expected = <ButtonLink text={mockData.genre[0]}/>
    expect(body.contains(expected)).toBe(true);
    expected = <ButtonLink text={mockData.genre[1]}/>
    expect(body.contains(expected)).toBe(true);
    expected = <ButtonLink text={mockData.genre[2]}/>
    expect(body.contains(expected)).toBe(true);
  })
  it('should render release Date correctly', ()=>{
    let body = shallow(<InfoPannel gameData = {mockData}/>);
    let expected = <span className="infoPanRD">{mockData.releaseDate}</span>
    expect(body.contains(expected)).toBe(true);
  })
});