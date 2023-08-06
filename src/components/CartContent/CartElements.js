import { useContext } from "react";
import { dataContext } from "../Context/DataContex";
import "./CartContent.css"

import CartItemCounter from "./CartItemCounter";

import React from 'react'

    const CartElements = () => {
    const {cart, setCart } = useContext(dataContext);

    const deleteProduct = (id)=> {
        const foundId = cart.find((element)=> element.id === id);

        const newCart= cart.filter((element)=> {
            return element !== foundId
        });

        setCart(newCart)
    };
    return  cart.map((product) =>{
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-cart"/>
                <h3 className="name">{product.name}</h3>
                <CartItemCounter product={product}/>
                <h4 className="price">{product.Price * product.quanty}$</h4>
                <h3 className="cart-delete-buttom" onClick={() => deleteProduct(product.id)}>
                    ❌</h3>
            </div>
        )
    })
    
}

export default CartElements;
