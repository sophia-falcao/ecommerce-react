import { useContext } from 'react'

import { ProducContext } from '../../context/productContext'
import { Products } from '../../components/products/Products'

export function Masculino(){

    const {filter,  error, filterProduct, setSort, sort, search}=useContext(ProducContext)
    

  
    

    return(
        <div>
            <div className='container_pag'>
             <h1>Masculino</h1>
             <div className='pag'>
                <div className='filter_pag'>
                    <h2> Categorias</h2>
          
                   <div>
                   <select name='selectMasculino' id="" onChange={(e) => setSort(e.target.value) }>
                        <option name='selectMasculino' value="Filtrar por...">Filtrar por...</option>
                        <option name='selectMasculino' value="Mais vendidosM">Mais Vendidos</option>
                        <option name='selectMasculino' value="Menor preçoM">Menor preço</option>
                        <option name='selectMasculino' value="Maior preçoM">Maior preço</option>
                    </select>
                 
                   </div>
                    <div className='filter'>
                        <input type="radio" name='input' id='blusa' value="masculino" onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="Todos">Todos</label>
                    </div>
                    <div className='filter'>
                        <input type="radio" name='input' id='camisa' value="Camisa" onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="camisa">Camisa</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='vestido' value="Blazer" onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="vestiido">Blazer</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='calca'/>
                        <label htmlFor="calca">Calça</label>
                    </div>
                    <div>
                       <input type="radio" name='input' id='short'/>
                       <label htmlFor="short">Short</label>
                    </div>
                </div>

                <div className='card_pagina'>
                    { error ? (
                        <p> Ops: {error}</p>
                    ) :  filter.filter(produto => produto.category === 'masculino')
                    .filter(produto  => produto.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a , b) => sort === 'Menor preçoM' && a.price - b.price || sort === 'Maior preçoM' && b.price - a.price || sort === 'Mais vendidosM' && b.vendas - a.vendas ) 
                    .map(produto => (
                        <div className='container_card' >
                            <Products produto={produto}/>
                        </div>
                    ))
                    
                    }
                </div>
            </div>
        </div>
        </div>
    )
}