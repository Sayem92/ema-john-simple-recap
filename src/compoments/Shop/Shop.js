import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([])

    useEffect(()=>{

        fetch('products-all.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    } ,[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
         const savedCart = []
        for(const id in storedCart){
            
             const addedProduct = products.find(product => product.id === id)
            //  console.log(addedProduct)
            if(addedProduct){
                const quantity = storedCart[id];
                 addedProduct.quantity = quantity
                savedCart.push(addedProduct)
             }
            setCart(savedCart)
        }

    },[products])

    const addToCart = (selectedProduct) => {
            // console.log(selectedProduct.id)
            let newCart = [];
            const exists = cart.find(product => product.id === selectedProduct.id)
            if(!exists){
              selectedProduct.quantity = 1;
              newCart = [...cart, selectedProduct]
            }
            else{
              const rest = cart.filter(product => product.id !== selectedProduct.id);
              exists.quantity = exists.quantity + 1;
              newCart = [...rest, exists]
            }



            //const newCart = [...cart, selectedProduct ];
            setCart(newCart)
            addToDb(selectedProduct.id)
    }
   
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
                }

            </div>
            <div className='list-container'>
               
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;