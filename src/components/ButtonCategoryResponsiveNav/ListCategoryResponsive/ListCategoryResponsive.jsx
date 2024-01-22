import './ListCategoryResponsive.css'
import { NavLink } from 'react-router-dom'
export function ListCategoryResponsive({setIsButtonCategoryOpen, isButtonCategoryOpen}){

    return(
        <div className='container_list' onClick={() => setIsButtonCategoryOpen(!isButtonCategoryOpen) }>
            <nav className='container_list_category'>
                <ul>
                    <li> <NavLink to='/'> Home </NavLink> </li>
                    <li> <NavLink to='/feminino'> Feminino</NavLink> </li>
                    <li> <NavLink to='/masculino'> Masculino </NavLink>  </li>
                    <li> <NavLink to='/calcados'> Calçados </NavLink>  </li>
                    <li> <NavLink to='/acessorios'> Acessorios </NavLink>  </li>
                    <li> <NavLink to='/beleza'> Beleza </NavLink>  </li>
                </ul>
            </nav>
        </div>
    )}