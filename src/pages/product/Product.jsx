import './product.css'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import {Link, useParams} from 'react-router-dom'

import { toast } from 'react-toastify';
import { ProducContext } from '../../context/productContext'
import { FormatCurrency } from '../../utils/FormatCurrency'

import { CgCornerDownLeft } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


export function Product(){
   const {id} = useParams()

     const [product, setProduct]= useState({})
    const { quantity , error, setError , loading, setLoading, handleAddCartProduct} = useContext(ProducContext)

    
     useEffect(()=> {
       try{
         async function getProducts(){
            setLoading(true)
             const res = await fetch(`https://api-json-ecommerce.vercel.app/${id}`)
             const dado = await res.json()
           setProduct(dado)
             setLoading(false)
             console.log(dado)
       } 
       getProducts()
      
       }  catch{
             setError('Houve um erro ao carregar')
         } 
     },[])

    return(
        <div className='container_product_page'>
           
          <div className='btn_back'>
            <Link to='/'> <CgCornerDownLeft /></Link>
          </div>
          
        { error && <p className='state'>{error}</p>}
        { loading ? <p className='state'> carregando dados...</p> : (
         <div className='container_produto'>
          
            <img src={product.image} alt={product.title} />
      
           <div className='description'>
              <h2>{product.title}</h2>
              <div className='prices'>
                <p className={`price ${product.desconto ? 'desconto_ativo_product': ''} `}>R$ {product.price}</p>
                  {product.desconto && <p className='price'> {FormatCurrency(product.price - (product.price * product.desconto/100), 'BRL')}</p>}
              </div>
              <span className='rating'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>   
            
              <p>{product.description}</p>
                 
              <button onClick={()=> handleAddCartProduct(product, quantity)}>Add cart</button>
              </div> 
            </div> )}
          </div>      
       
    )
} 