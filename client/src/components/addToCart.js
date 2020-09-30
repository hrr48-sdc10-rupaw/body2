import React from 'react';
import style from '../css/addToCart.css';

let AddToCart = (props) =>{
  return(
  <div id="containerATC">
    <h2 id ='BuyTitle'>{`Buy ${props.gameData.title}`}</h2>
    <span id='ATCwindowsLogo'>(+)</span>
    <div id='ATCbtnContainter'>
  <span>{props.gameData.price}</span>
      <button id="ATCbtn">Add to Cart</button>
    </div>
  </div>
  )
}

export default AddToCart;