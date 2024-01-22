import { useContext} from 'react';
import './ButtonSearchresponsive.css'
import { IoSearchOutline } from "react-icons/io5";

import { ProducContext } from '../../context/productContext';

export function ButtonSearchresponsive(){

    const {isSearchOpen, setIsSearchOpen}= useContext(ProducContext)

    return(
        <div>
            <button type='button'  id='btn_search_responsive' onClick={()=> setIsSearchOpen(!isSearchOpen)}> <IoSearchOutline /> </button>
        
        </div>
    )
}