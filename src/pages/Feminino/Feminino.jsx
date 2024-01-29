import { useContext } from 'react'

import { ProducContext } from '../../context/productContext'
import { Products } from '../../components/products/Products'

export function Feminino(){

    const {filter, error, filterProduct, search, setSort, sort, products}=useContext(ProducContext)
    
    return(
        <div className='container_pag'>
            <h1>Feminino</h1>
            <div className='pag'>
                <div className='filter_pag'>
                    <h2> Categorias</h2>

                    <select name='selectFeminino' id="" onChange={(e) => setSort(e.target.value) }>
                        <option name='selectFeminino' value="Filtrar por...">Filtrar por...</option>
                        <option name='selectFeminino' value="Mais vendidosF">Mais Vendidos</option>
                        <option name='selectFeminino' value="Menor preçoF">Menor preço</option>
                        <option name='selectFeminino' value="Maior preçoF">Maior preço</option>
                    </select>
                   
                    <div className='filter'>
                        <input type="radio" name='input' id='feminino' value='feminino' onChange={(e) => filterProduct(e.target.value)}/>
                        <label htmlFor="feminino">Todos</label>
                    </div>
                    <div className='filter'>
                        <input type="radio" name='input' id='blusa' value='Blusa' onChange={(e)=> filterProduct(e.target.value)}/>
                        <label htmlFor="blusa">Blusa</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='vestido' value='Vestido' onChange={(e)=> filterProduct(e.target.value)} />
                        <label htmlFor="vestido">Vestido</label>
                    </div>
                    <div>
                        <input type="radio" name='input' id='calca' value='Calça' onChange={(e)=> filterProduct(e.target.value)}/>
                        <label htmlFor="calca">Calça</label>
                    </div>
                    <div>
                       <input type="radio" name='input' id='short' value='Short' onChange={(e)=> filterProduct(e.target.value)}/>
                       <label htmlFor="short">Short</label>
                    </div>
                </div>

                <div className='card_pagina'>
                    { error ? (
                        <p> Ops: {error}</p>
                    ) :  filter.filter(produto => produto.category === 'feminino').filter(produto  => produto.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a , b) => sort === 'Menor preçoF' && a.price - b.price || sort === 'Maior preçoF' && b.price - a.price || sort === 'Mais vendidosF' && b.vendas - a.vendas )
                    .map(produto => (
                        <div className='container_card' key={produto.id}>
                            <Products produto={produto}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}