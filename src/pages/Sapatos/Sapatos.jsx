import { useContext } from "react"
import { Products } from "../../components/products/Products"
import { ProducContext } from "../../context/productContext"


export function Sapatos(){

    const {error, filter, filterProduct, setSort, sort , search}= useContext(ProducContext)
    return(
        <div>
            <div className='container_pag'>
            <h1>Calçados</h1>
            <div className='pag'>
                <div className='filter_pag'>
                    <h2> Categorias</h2>

                    <select name='selectFeminino' id="" onChange={(e) => setSort(e.target.value) }>
                        <option name='selectFeminino' value="Filtrar por...">Filtrar por...</option>
                        <option name='selectFeminino' value="Mais vendidosC">Mais Vendidos</option>
                        <option name='selectFeminino' value="Menor preçoC">Menor preço</option>
                        <option name='selectFeminino' value="Maior preçoC">Maior preço</option>
                    </select>
                   
                    <div className='filter'>
                        <input type="radio" name="input" id='blusa' value='calcados' onChange={e => filterProduct(e.target.value)}/>
                        <label htmlFor="blusa">Todos </label>
                    </div>
                   
                    <h3>Feminino</h3>
                    <div>
                        <input type="radio" name="input" id='tenis' value='Tenis Feminino' onChange={e => filterProduct(e.target.value)} />
                        <label htmlFor="tenis">Tenis</label>
                    </div>
                    <div>
                        <input type="radio" name="input" id='bota' value='Bota' onChange={e => filterProduct(e.target.value)} />
                        <label htmlFor="bota">Botas</label>
                    </div>
                    <div>
                        <input type="radio" name="input" id='salto' value='Salto ' onChange={e => filterProduct(e.target.value)}/>
                        <label htmlFor="salto">Saltos </label>'
                    </div>
                    <div>
                       <input type="radio" name="input" id='sandalia' value='Sandália' onChange={e => filterProduct(e.target.value)}/>
                       <label htmlFor="sandalia" value='Sándalia'>Sandália</label>

                    </div>
                    <div className="container_masculino">
                        <h3>Masculino</h3>
                        <div>
                            <input type="radio" name="input" id='tenis' value='Tenis Masculino' onChange={e => filterProduct(e.target.value)} />
                            <label htmlFor="tenis">Tenis</label>
                        </div>
                        <div>
                            <input type="radio" name="input" id='sapato' value='Sapato Masculino' onChange={e => filterProduct(e.target.value)}/>
                            <label htmlFor="sapato">Sapato </label>
                        </div>
                    </div>
            
                </div>

                <div className='card_pagina'>
                    { error ? (
                        <p> Ops: {error}</p>
                    ) : filter && filter.filter(produto => produto.category.includes('calcados'))
                    .filter(produto  => produto.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a , b) => sort === 'Menor preçoC' && a.price - b.price || sort === 'Maior preçoC' && b.price - a.price || sort === 'Mais vendidosC' && b.vendas - a.vendas ) 
                    .map(produto => (
                        <div className='container_card'>
                            <Products produto={produto}/>
                        </div>
                    ))}
                </div>
            </div>
         </div>
        </div>
    )}