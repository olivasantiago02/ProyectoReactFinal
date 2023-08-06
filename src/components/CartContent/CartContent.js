import { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { dataContext } from "../Context/DataContex";

import "./CartContent.css"

const CartContent = () => {
  const { cart } = useContext(dataContext);
return (
  <>
  <NavBar />
  {cart.length > 0 ? (
    <>
    <CartElements/>
    <CartTotal/>
    </>
  
  ) : (

    <h2 className="empty-message">Your Cart Is Empty</h2>
  )}
  
  </>
)}





export default CartContent
