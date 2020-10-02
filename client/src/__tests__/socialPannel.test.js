import React from 'react';
import {shallow, configure} from 'enzyme';
import SocialPannel from '../components/socialPannel.js';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });






describe('SOCIAL PANNEL COMPONENT', function(){
  it('should render correctly',()=>{
    shallow(<SocialPannel/>);
  })
  it('should render the correct buttons', ()=>{
    let body = shallow(<SocialPannel/>);
    let expected1 =  <button className="socPanBtn">Share</button>
    let expected2 = <button className="socPanBtn">Embed</button>
    let expected3 = <button className="socPanBtn"><img alt="flag" className ="flagIcon" src="https://s3.us-east-2.amazonaws.com/images.for.hrr/flags.svg"/></button>
    expect(body.contains(expected1)).toBe(true);
    expect(body.contains(expected2)).toBe(true);
    expect(body.contains(expected3)).toBe(true);
  })
})