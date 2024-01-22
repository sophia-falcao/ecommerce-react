import './BestSellers.css'
import { useContext, useState, useRef } from "react"
import { ProducContext } from "../../context/productContext"
import { Products } from "../../components/products/Products"


import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export function BestSellers(){
    
    const { error, products}= useContext(ProducContext)
  
    const bestSellers = useRef(null)

    function handleLeft(e){
        e.preventDefault()   
        console.log(bestSellers.current.offsetWidth)
        bestSellers.current.scrollLeft -= bestSellers.current.offsetWidth
    }
 
    function handleRigth(e){
        e.preventDefault()
        console.log(bestSellers.current.offsetWidth)
        bestSellers.current.scrollLeft += bestSellers.current.offsetWidth
    }

  
    return(
        <section className='container_banner_bestSellers'>
        <h1> Mais vendidos   </h1>
      
    
        <div className='buttons_bestSellers' >
            <button className='btn_carrousel'onClick={handleLeft} > <FaArrowLeft /> </button>
          <div className='carrousel_bestSellers' ref={bestSellers}>  
               { error? (
                   <p> Ops: {error}</p>
                   ) :  products.filter(produto=> produto.vendas > 10 ).map( produto => (                           
                       <div className='item' key={produto._id}>
                           <Products produto={produto}/>
                        </div>        
                   )
                   )}
          </div>
       
         <button className='btn_carrousel' onClick={handleRigth}> <FaArrowRight /> </button>
        </div>
       </section>

       
    ) 
}