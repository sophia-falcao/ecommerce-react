
import './Home.css'

import { BannerPrincipal } from "../../components/banner/banner_principal.jsx/BannerPrincipal"
import { Categories } from "../../components/categories/Categories"
import { BestSellers } from "../../components/bestSellers/BestSellers"
import { Info } from "../../components/banner/info/Info"
import { Banner_feminino } from '../../components/banner/banner_feminino/Banner_feminino'




export function Home(){


    
    return(
        <main className='container_home'>
           
            <BannerPrincipal />          
            <Info />
            <Categories />
            <Banner_feminino />
            <BestSellers />
         
            

        </main>
    )
}