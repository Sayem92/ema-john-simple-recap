import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {img,name,price,seller,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} start</p>
            </div>
            <button onClick={()=> props.addToCart(props.product)}
            className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Product;