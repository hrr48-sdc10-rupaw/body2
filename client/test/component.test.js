import React from 'react';
import {shallow} from 'enzyme';
import AddToCart from '../components/addToCart.js';


describe('ADDTOCART COMPONENT', function(){
  it('it should render correctly', ()=>{
    shallow(<AddToCart/>);
  })
})