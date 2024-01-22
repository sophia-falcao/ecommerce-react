import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Categories.css'
export function Categories(){

  const navigate = useNavigate()
 

    return(

        <div className="container_category">
            <div className='text_category'>   
                <p> Explore nossos produtos! </p>
            </div>
            <div className="categ container_category_img">
                <div className=" categ categoria_mulher" onClick={() => navigate('/feminino')}> <p> 30% Off</p> </div>
                <div className=" categ categoria_homem" onClick={() => navigate('/masculino')}> <p> 30% Off</p> </div>
                <div className=" categ categoria_beleza" onClick={() => navigate('/beleza')}> <p> 30% Off</p> </div>
                <div className=" categ categoria_acessorios" onClick={() => navigate('/acessorios')}> <p>50% Off</p></div>
                <div className=" categ categoria_sapatos" onClick={() => navigate('/calcados')}> <p>40% Off</p> </div>
            </div>
            
        </div>
    )
}