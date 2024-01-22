import { useState } from 'react'
import './ButtonCategoryNav.css'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ListCategoryResponsive } from './ListCategoryResponsive/ListCategoryResponsive';
export function ButtonCategoryNav(){

    const [isButtonCategoryOpen, setIsButtonCategoryOpen]=useState(false)

    return(
        <div className='btn_category_responsive '>
            <button onClick={() => setIsButtonCategoryOpen(!isButtonCategoryOpen)}> <HiOutlineMenuAlt1 /> </button>
       
            {isButtonCategoryOpen && <ListCategoryResponsive isButtonCategoryOpen={isButtonCategoryOpen} setIsButtonCategoryOpen={setIsButtonCategoryOpen}/>}
        </div>
    )
}