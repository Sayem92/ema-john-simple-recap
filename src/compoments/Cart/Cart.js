import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0
    for(const product of cart){
        // console.log(product)
        quantity = quantity + product.quantity
        total = total + product.price  * product.quantity;
        shipping = shipping + product.shipping;
        
    }
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax;
    // console.log(quantity)
    return (
        <div className='cart'>
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Price: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;