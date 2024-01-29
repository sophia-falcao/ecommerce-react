import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {NavBar} from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { Home } from './pages/Home/Home'
import { Product } from './pages/product/Product'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useContext } from 'react'
import { ProducContext } from './context/productContext'


import { Feminino } from './pages/Feminino/Feminino'
import { Masculino } from './pages/Masculino/Masculino'
import { Beleza } from './pages/Beleza/Beleza'
import { Acessorios } from './pages/Acessorios/Acessorios'
import { Sapatos } from './pages/Sapatos/Sapatos'
import { Search } from './pages/Search/Search'
import { SearchForm } from './components/search/SearchForm'



function Routers() {
  const { isSearchOpen}=useContext(ProducContext)

  return (
    <>
      <BrowserRouter basename='/ecommerce-react'> 
       <NavBar />
       {isSearchOpen && <SearchForm />}
       
       <Routes> 
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/feminino' element={<Feminino />} />
        <Route path='/masculino' element={<Masculino />}/>
        <Route path='/beleza' element={<Beleza />}/>
        <Route  path='/acessorios' element={<Acessorios />}/> 
        <Route path='/calcados' element={<Sapatos />}/>
        
        
       </Routes>
       <Footer />
       <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          pauseOnFocusLoss
       />
      </BrowserRouter>
    </>
  )
}

export default Routers
