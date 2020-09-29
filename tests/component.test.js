const assert = require('assert');
import {shallow} from 'enzyme';
import AddToCart from '../client/src/components/addtoCart.js';

describe('ADDTOCART COMPONENT', function(){
  it('it should render correctly', ()=>{
    shallow(<AddToCart/>);
  })
})