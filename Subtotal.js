import React, { useState } from 'react';
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket}, dispatch] = useStateValue();
  return (
    
    <div className="subtotal">
        <div>
        <p>Subtotal ({basket.length}) items</p><strong>${getBasketTotal(basket)}</strong>
        <small className="subtotal__gift">
        <input type="checkbox"/> This order contains a gift 

        </small>
        <button>Proceed to Checkout</button>
        

        </div>
     
    </div>
  )
}

export default Subtotal