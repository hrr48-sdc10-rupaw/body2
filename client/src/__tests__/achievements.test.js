import React from 'react';
import {shallow, configure} from 'enzyme';
import Achievements from '../components/achievements.js';
import Adapter from 'enzyme-adapter-react-16';
import PannelBar from '../components/pannelBar.js';
configure({ adapter: new Adapter() });


let mockData={
  steamAcheivments: [
    "https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg",
    "https://s3.us-east-2.amazonaws.com/images.for.hrr/818-100x100.jpg",
    "https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg"
]
}



describe('ACHIEVEMENTS COMPONENT', function(){
  it('it should render correctly', ()=>{
    shallow(<Achievements gameData = {mockData}/>);
  })
  it('should render achievement picures', ()=>{
    let body = shallow(<Achievements gameData = {mockData}/>);
    let img = mockData.steamAcheivments[1];
    let expected = <img key={img} className ="achImg" alt ="achivs"src={img}></img>;
    expect(body.contains(expected)).toBe(true);
  })
  it('should render view all button correctly', ()=>{
    let body = shallow(<Achievements gameData = {mockData}/>);
  let expected = <button className = "AchViewAllBtn">{`View all ${mockData.steamAcheivments.length}`}</button>;
    expect(body.contains(expected)).toBe(true);
  })
});