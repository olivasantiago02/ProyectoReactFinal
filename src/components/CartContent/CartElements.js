import { useContext } from "react";
import { dataContext } from "../Context/DataContex";
import "./CartContent.css"

import React from 'react'

    const CartElements = () => {
    const {cart} = useContext(dataContext);
    return  cart.map((product) =>{
        return(
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-cart"/>
                <h3 className="name">{product.name}</h3>
                <h4 className="price">{product.Price}$</h4>
            </div>
        )
    })
    
}

export default CartElements;
