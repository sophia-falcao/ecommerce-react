import  './NavBar.css'
import './NavBarResponsive.css'
import {NavLink, Link} from 'react-router-dom'

import { CartButton } from '../Cart_/cartButton/CartButton'
import { LoginButton } from '../Login/LoginButton/LoginButton';
import { SearchForm } from '../search/SearchForm';

import { ButtonCategoryNav } from '../ButtonCategoryResponsiveNav/ButtonCategoryNav';
import { ButtonSearchresponsive } from '../ButtonSearchResponsive/ButtonSearchResponsive';


export function NavBar(){

    const  navItems = [
        {title: 'Feminino', path: '/feminino'},
        {title: 'Masculino', path: '/masculino'},
        {title: 'Calçados', path: '/calcados'},
        {title: 'Acessorios', path: '/acessorios'},
        {title: 'Beleza', path: '/beleza'}
    ]

    return(
        <header className='container_header'>
            <div className='container'>
                
                <div className='btn_category_responsive'>
                    <ButtonCategoryNav />
                </div>
              
                <h3>Ishop</h3>

                <div className='search_navBar'>
                    <SearchForm />

                </div>
                
             <nav className='container_nav'>   
                <ul>  
                    <li> <NavLink to='/'> Home </NavLink> </li>
                    <li> <a href="#">  <LoginButton />  </a> </li>   
                    <li className='btn_cart_navbar'> <a href="#">  <CartButton />  </a> </li>  
                </ul>  
             </nav>
                
                
             <div className='navBar_responsive'>
                    <nav className='container_nav_responsive'>
                      <ul>
                        <li> <NavLink> <ButtonSearchresponsive /></NavLink> </li>
                        <li>  <NavLink> <LoginButton /> </NavLink> </li>
                        <li>  <NavLink> <CartButton/> </NavLink> </li>
                      </ul>
                    </nav>
                </div>
             </div>

             <div className='container_nav_categories'>
                <ul>
                    {navItems.map(({title, path}) => (
                        <li key={title}>
                            <Link to={path}> {title}</Link>
                        </li>
                    ))}
                </ul>
             </div>


             
            </header>
    )
}