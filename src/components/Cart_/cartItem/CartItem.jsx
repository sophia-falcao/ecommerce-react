import './CartItem.css'
import { useContext } from 'react'
import { ProducContext } from '../../../context/productContext'

import { IoTrashOutline } from "react-icons/io5";
import { FormatCurrency } from '../../../utils/FormatCurrency';

export function CartItem({data}){

    const { removeItem, handleIncre, handleDecre} = useContext(ProducContext)


    return(
        <section className="cart_item" key={data.id}>  
          <img 
                src={data.image} 
                alt="imagem do produto" 
                className="cart_item_image" 
            />

            <div className="cart_item_content">
               
                 <h3 className="cart_item_title"> {data.title}</h3>
              
                {data.desconto ? ( 
                   <p className='cart_item_price'> { FormatCurrency(data.price - (data.price * data.desconto/100) , 'BRL')}</p>
                 ) :     
                   <p className="cart_item_price"> {FormatCurrency(data.price , 'BRL')}  </p>   
                }
                
                
                { data.quantity > 1 && <p className='cart_item_price'>  Total:  { data.desconto ? FormatCurrency((data.price - (data.price * data.desconto/100)) * data.quantity , 'BRL') :  FormatCurrency(data.price * data.quantity, 'BRL') } </p>}
                
                <div className='container_btn_quantity'>
                    <button className='btn_quantity' onClick={() => handleDecre(data.id)}> - </button>
                    <p> {data.quantity} </p>
                    <button className='btn_quantity' onClick={() => handleIncre(data.id)}> + </button> 
                </div>
       
                <button type="button" className="btn_remove_item" onClick={() => removeItem(data.id, data.title)}>
                    <IoTrashOutline />
                </button>
            </div>   
        </section>
    )
}