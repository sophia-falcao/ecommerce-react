import './cart.css'
import { ProducContext } from '../../../context/productContext'
import { useContext } from 'react'
import { CartItem } from '../cartItem/CartItem'
import { FormatCurrency } from '../../../utils/FormatCurrency'

export function Cart(){

    const {cartProduct, setCartProduct , isCartVisible ,setIsCartVisible, cartResume} = useContext(ProducContext)

    return(
       <div className='container_cart' >

       <section className={` cart ${isCartVisible ? 'cart_active': ''}`} >

        <div className="cart_items">
            {cartProduct.map(item => <CartItem key={item.id} data={item} setCartProduct={setCartProduct}  /> )}
        </div>

        <div className="cart_resume">
            <h3>Resumo do carrinho: </h3>
            <span> {FormatCurrency(cartResume, 'BRL')}</span>
            <button className='btn_buy_cart'> Finalizar compra</button>
        </div>

        <button className='btn_cart_responsive' onClick={() => setIsCartVisible(false)}> X  </button>
       </section>
       </div>
    )
}