import React from 'react';
import {shallow, configure} from 'enzyme';
import SystemReqs from '../components/systemReqs.js';
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

describe('SYSTEM REQUIRMENTS', function(){
  it('should render correctly',()=>{
    shallow(<SystemReqs gameData ={mockData}/>);
  });

  it('should render the correct requirements', ()=>{
    let body = shallow(<SystemReqs gameData ={mockData}/>);
    let expected = <span><span className="reqName">DirectX: </span>{mockData.requirements.directX}</span>;
    expect(body.contains(expected)).toBe(true);
  })
})