import './Products.css'

import { IoIosCart } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import {Link} from'react-router-dom'
import { useContext, useEffect, useState } from "react"
import { ProducContext } from "../../context/productContext"

import { FormatCurrency } from '../../utils/FormatCurrency';

export function Products({produto}){

    const { quantity , handleAddCart} = useContext(ProducContext)

  
    return(
          <>           
            <div className='card_products' key={produto.id} id={produto.id}>          
              {produto.desconto && <p className='desconto_card'>{ produto.desconto}% </p>}
            
              <div className='container_foto'>
                <img src={produto.image} alt={produto.title} />
              </div>
             
              <h2>{produto.title.substring(0, 28)}</h2>

              <div className='card_prices'>
               <p className={produto.desconto ? 'desconto_ativo': ''}> {FormatCurrency(produto.price, 'BRL')}</p>
                {produto.desconto && <p>{FormatCurrency(produto.price - (produto.price * produto.desconto/100) , 'BRL')}</p>}
              </div>
             
              { !produto.desconto && produto.price <= 150  ? (
              <p className='parcela'> em até 2x  <span>{FormatCurrency(produto.price / 2, 'BRL')}</span></p>
              )  : !produto.desconto && 
                <p className='parcela'> em até 6x  <span>{FormatCurrency(produto.price / 6, 'BRL')} </span></p> 
              }

              {produto.desconto && produto.price - (produto.price * produto.desconto/100) <= 150 ? (
                 <p className='parcela'> em até 2x  <span>{FormatCurrency((produto.price - (produto.price * produto.desconto/100)) / 2 , 'BRL') }</span></p>
                 )  : produto.desconto && 
                   <p className='parcela'> em até 6x  <span>{FormatCurrency((produto.price - (produto.price * produto.desconto/100)) / 6 , 'BRL')} </span></p> 
                 }
   
   
              <button
                className='btn_cart'
                onClick={() =>  handleAddCart(produto, quantity)}>
                    <IoIosCart />
              </button>

              <div className='link_ver_mais'>
               <Link to={`/product/${produto.id}`} > <FaEye /> </Link>
              </div> 
           </div>
        </>
        
    )
}