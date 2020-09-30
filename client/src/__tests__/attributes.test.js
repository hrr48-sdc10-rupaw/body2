import React from 'react';
import {shallow, configure} from 'enzyme';
import Attributes from '../components/attributes.js';
import Adapter from 'enzyme-adapter-react-16';
import PannelBar from '../components/pannelBar.js';
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
  attributes:{
    test1: false,
    test2: true,
    test3: false
  },
  aboutInfo: "this is a paragraph of stuff"
}

describe('IS THIS GAME RTY', function(){
  it('it should render correctly', ()=>{
    shallow(<Attributes gameData = {mockData}/>);
  })

  it('should contain true attributes', ()=>{
    let body = shallow(<Attributes gameData = {mockData}/>);
    let expected = <PannelBar text = "test2" icon="(X)"/>;
    expect(body.contains(expected)).toBe(true);
  })

  it('should not contain false attributes', ()=>{
    let body = shallow(<Attributes gameData = {mockData}/>);
    let expected = <PannelBar text = "test3" icon="(X)"/>;
    expect(body.contains(expected)).toBe(false);
  })
})