import { useContext, useState } from 'react'

import { ProducContext } from '../../context/productContext'
import { Products } from '../../components/products/Products'


export function Beleza(){

   
    const {filter, error, filterProduct, search, setSort, sort}=useContext(ProducContext)
    

      
 

    return(
        <div>
               <div className='container_pag'>
             <h1>Beleza</h1>
             <div className='pag'>
                <div className='filter_pag'>
                    <h2> Categorias</h2>

                    <select name='selectFeminino' id="" onChange={(e) => setSort(e.target.value) }>
                        <option name='selectFeminino' value="Filtrar por...">Filtrar por...</option>
                        <option name='selectFeminino' value="Mais vendidosB">Mais Vendidos</option>
                        <option name='selectFeminino' value="Menor preçoB">Menor preço</option>
                        <option name='selectFeminino' value="Maior preçoB">Maior preço</option>
                    </select>
                   
                   
                    <div className='filter'>
                        <input type="radio" name='input' id='todos' value='beleza' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="todos">Todos</label>
                    </div>
                    <div className='filter'>
                        <input type="radio" name='input' id='creme' value='Creme' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="creme">Creme</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='serum' value='Sérum' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="serum">Sérum</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='sabonete' value='Sabonete' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="sabonete">Sabonete Artesanal</label>
                    </div>
                   
                </div>

                <div className='card_pagina'>
                    { error ? (
                        <p> Ops: {error}</p>
                    ) : filter && filter.filter(produto => produto.category === 'beleza').filter(produto  => produto.title.toLowerCase().includes(search.toLowerCase()))
                    .filter(produto  => produto.title.includes(search))
                    .sort((a , b) => sort === 'Menor preçoB' && a.price - b.price || sort === 'Maior preçoB' && b.price - a.price || sort === 'Mais vendidosB' && b.vendas - a.vendas ) 
                    .map(produto => (
                        <div className='container_card'>
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