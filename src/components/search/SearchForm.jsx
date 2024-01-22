import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchForm.css'
import { FaSearch } from "react-icons/fa";
import { ProducContext } from '../../context/productContext'

export function SearchForm(){
 
    const {search, setSearch , isSearchOpen, inputRef,setIsSearchOpen}= useContext(ProducContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        console.log(search)
        e.preventDefault()
        if(!search){
            return
        }
        navigate("/search?q=" + search)
    }
   

    return(
            <div className={ ` search ${isSearchOpen ? 'search_active' : ''} `} > 
             <form  onSubmit={handleSubmit}>
                <input type="text" placeholder="Faça a sua busca..." onChange={e => setSearch(e.target.value)}/>
                <button type='submit' className='btn_search'> <FaSearch /></button>
             </form>

            </div>    
    )
}