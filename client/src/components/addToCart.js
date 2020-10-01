import React from 'react';
import '../css/addtocart.css';


let AddToCart = (props) =>{
  return(
  <div id="containerATC">
    <h1 id ='BuyTitle'>{`Buy ${props.gameData.title}`}</h1>
      <img className="windowsIcon" alt = "windows-icon" src="https://s3.us-east-2.amazonaws.com/images.for.hrr/windows.svg"></img>
    <div id='ATCbtnContainter'>
  <span className="price">{props.gameData.price}</span>
      <button className="ATCbtn">Add to Cart</button>
    </div>
  </div>
  )
}

export default AddToCart;

