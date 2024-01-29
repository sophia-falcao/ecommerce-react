import { useContext, useState } from "react"
import { Products } from "../../components/products/Products"
import { ProducContext } from "../../context/productContext"

export function Acessorios(){

    const {error, filter, filterProduct,setSort, sort, search}= useContext(ProducContext)


  

    return(
        <div className="container_pag">
            <h1>Acessorios</h1>

            <div className='pag'>
                <div className='filter_pag'>
                    <h2> Categorias</h2>
                        <select name='selectFeminino' id="" onChange={(e) => setSort(e.target.value) }>
                            <option name='selectFeminino' value="Filtrar por...">Filtrar por...</option>
                            <option name='selectFeminino' value="Mais vendidosA">Mais Vendidos</option>
                            <option name='selectFeminino' value="Menor preçoA">Menor preço</option>
                            <option name='selectFeminino' value="Maior preçoA">Maior preço</option>
                        </select>
                   
                    <div className='filter'>
                       <input type="radio" name="input" id='acessorios' value='acessorios' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="acessorios">Todos</label>
                    </div>
                    <div className='filter'>
                       <input type="radio" name="input" id='brinco' value='Brinco' onChange={(e)=> filterProduct( e.target.value)}/>
                        <label htmlFor="brinco">Brinco</label>
                    </div>
                    <div>
                       <input type="radio" name="input" id='colar' value='Colar' onChange={(e)=> filterProduct(e.target.value)} />
                        <label htmlFor="colar">Colar</label>
                    </div>
                    <div>
                       <input type="radio" name="input" id='oculos' value='Oculos' onChange={(e)=> filterProduct(e.target.value)}/>
                        <label htmlFor="oculos">Oculos</label>
                    </div>
                    <div>
                      <input type="radio" name="input" id='pulseira' value='Pulseira' onChange={(e)=> filterProduct(e.target.value)}/>
                       <label htmlFor="pulseira">Pulseira</label>
                    </div>
                </div>

                <div className='card_pagina'>
                    { error ? (
                        <p> Ops: {error}</p>
                    ) : filter.filter(produto => produto.category === 'acessorios')
                    .filter(produto  => produto.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a , b) => sort === 'Menor preçoA' && a.price - b.price || sort === 'Maior preçoA' && b.price - a.price || sort === 'Mais vendidosA' && b.vendas - a.vendas )
                    .map(produto => (
                        <div className='container_card'>
                            <Products produto={produto}/>
                        </div>
                    ))
                    
                    }
                </div>
            </div>    
        </div>
    )
}