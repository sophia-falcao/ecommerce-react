import './cartButton.css'
import { useContext } from "react"
import { ProducContext } from "../../../context/productContext"

import { IoIosCart } from "react-icons/io";

export function CartButton(){

    const {cartProduct, isCartVisible, setIsCartVisible} = useContext(ProducContext)

    return(
        <button 
            type="button" 
            className="cart_button"
            onClick={() => setIsCartVisible(!isCartVisible)}
            >
                <IoIosCart /> 
           { cartProduct.length > 0 && <span className="cart_quantity"> { cartProduct.length }</span>}
        </button>
    )
}