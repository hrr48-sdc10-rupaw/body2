import React from 'react';
import {shallow, configure} from 'enzyme';
import AboutThisGame from '../components/aboutThisGame.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


let mockData = {
  title: 'fake title name',
  price: 'fake price',
  requirements: {
    directX: "version stuff",
    graphics: "graphics stuff",
    memory: "memory stuff",
    os: "os stuff",
    processor: "processor stuff",
    storage: "storage stuff"
  },
  aboutInfo: "this is a paragraph of stuff"
}

describe('ABOUT THIS GAME', function(){
  it('should render correctly with no errors', ()=>{
    shallow(<AboutThisGame gameData = {mockData}/>);
  })
  it('should contain the correct about information',()=>{
    var body = shallow(<AboutThisGame gameData = {mockData}/>);
    var expected = <p className="aboutParagraph">{mockData.aboutInfo}</p>;
    expect(body.contains(expected)).toBe(true);
  })
})