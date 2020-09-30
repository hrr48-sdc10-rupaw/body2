import React from 'react';
import {shallow, configure} from 'enzyme';
import ITGRTY from '../components/isThisGameRTY.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('IS THIS GAME RTY', function(){
  it('it should render correctly', ()=>{
    shallow(<ITGRTY/>);
  })
})