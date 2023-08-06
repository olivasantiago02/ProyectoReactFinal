import { dataContext } from "../Context/DataContex";
import { useContext } from "react";

const TotalItems = () => {

    const { cart } = useContext(dataContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
    return <span className="cart-counter">{itemsQuanty}</span>;

};

export default TotalItems