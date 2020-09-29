import React from 'react';


let AddToCart = (props) =>{
  console.log(props.gameData);
  return(
  <div>
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