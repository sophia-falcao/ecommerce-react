import  './Banner_feminino.css'
import { useContext, useRef } from 'react'
import { ProducContext } from '../../../context/productContext'
import { Products } from '../../products/Products'

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


export function Banner_feminino(){

    const {products} = useContext(ProducContext)
    
    const carrousel = useRef(null)

    function handleLeftClick(e){
        e.preventDefault()   
        carrousel.current.scrollLeft -= carrousel.current.offsetWidth
    }
    function handleRigthClick(e){
        e.preventDefault()
        carrousel.current.scrollLeft += carrousel.current.offsetWidth
    }

    return(
        <>    
        <section className='container_banner_feminino'>
          
            <div className='container_carrousel'>
             <h1>Curta o Verão</h1> 
                <div className="carrousel" ref={carrousel}>
                
                    {products.filter(produto => produto.title.includes('Vestido')).map(produto => (
                    <div className='item'>
                            <Products produto={produto}/>
                    </div>
                    ))}

        
                </div>
                <div className='buttons'>
                    <button onClick={handleLeftClick} > <FaArrowLeft /> </button>
                    <button  onClick={handleRigthClick}> <FaArrowRight /> </button>
                </div>
                
            </div>
        </section>
        </>
    )
}

