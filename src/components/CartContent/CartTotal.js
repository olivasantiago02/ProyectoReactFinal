import { useContext } from "react";
import { dataContext } from "../Context/DataContex";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc,el) => acc + el.Price * el.quanty, 0);
  return (
    <div className="cartTotal">
      <h3>Total a pagar : {total} $</h3>
    </div>
  )
}

export default CartTotal
