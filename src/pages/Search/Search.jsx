import { useContext, useEffect, useState, useRef, useCallback} from 'react'
import './Search.css'
import { useSearchParams, Link, useParams } from 'react-router-dom'

import { TbInputSearch, TbMoodAnnoyed } from "react-icons/tb";
import { Products } from '../../components/products/Products'
import { ProducContext } from '../../context/productContext';

export function Search(){

     const [searchParams] = useSearchParams()

    const {search, inputSearch}= useContext(ProducContext)    
   const [productSearch, setProductSearch]= useState([])
   
    
    
 useEffect(()=> {
         async function searchProducts(){
             const res = await fetch("https://api-json-ecommerce.vercel.app/search?" + searchParams)
             const dado = await res.json()
             setProductSearch(dado)
             console.log(dado)
         
         }
         searchProducts()
    },[searchParams])

 

    return(
        <div className='container_search'> 
            <h1>Resultados Encontrados</h1>
           { productSearch.length >= 1 ? (<div>
            {productSearch.map(produto => (
                <div > 
                   <Products produto={produto}/>
                </div>
            ))}

            </div> ): <p className='not_search'>Não Encontramos Esse produto <TbMoodAnnoyed /> </p> }
       
        </div>
    )
}