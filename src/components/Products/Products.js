import { useContext } from "react";
import { dataContext } from "../Context/DataContex";

import "./Products.css"

const Products = () => {
    const { data, buyProducts } = useContext(dataContext);

  return  data.map((product)=> {
    return(
        <div className="card" key={product.id}>
            <img src={product.img} alt="img-product-card"/>
            <h3>{product.name}</h3>
            <h4>{product.Price}$</h4>
            <button onClick={()=> buyProducts (product)}>Buy</button>
        </div>
    );
  })
  
}

export default Products
