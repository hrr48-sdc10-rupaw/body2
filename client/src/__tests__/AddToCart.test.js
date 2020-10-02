import React from 'react';
import {shallow, configure} from 'enzyme';
import AddToCart from '../components/addToCart.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let mockData = {
  title: 'fake title name',
  price: 'fake price'
}

describe('ADDTOCART COMPONENT', function(){
  it('it should render correctly', ()=>{
    shallow(<AddToCart gameData = {mockData}/>);
  })
  it('it should fill the price block correctly', ()=>{
    var body = shallow(<AddToCart gameData = {mockData}/>);
    var expected = <span className="price">{mockData.price}</span>
    expect(body.contains(expected)).toBe(true);
  })
  it('it should fill the "buy title" block correctly', ()=>{
    var body = shallow(<AddToCart gameData = {mockData}/>);
    var expected = <h1 id ='BuyTitle'>{`Buy ${mockData.title}`}</h1>;
    expect(body.contains(expected)).toBe(true);
  })
})