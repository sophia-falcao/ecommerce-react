import { createContext, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';

export const ProducContext = createContext()

export function ProductsContextProvider({children}){

    const [products, setProducts]= useState([])
    const [filter, setFilter]= useState([])
    const [product, setProduct]= useState({})
   
   
    const [cartProduct, setCartProduct]= useState([])
    const [isCartVisible, setIsCartVisible]= useState(false)
   
    const [loading, setLoading]= useState(false)
    const [error, setError]= useState(false)
    const [search, setSearch]= useState('')
    const [quantity, setQuantity]= useState(1)
    const [sort, setSort] = useState('')
    const [desconto, setDesconto]= useState({})
    
    const [isLoginOpen, setIsLoginOpen]= useState(false)
    const [isButtonNav, setIsButtonNav]= useState(false)
    const [isSearchOpen, setIsSearchOpen]= useState(false)
   
    useEffect(() => {    
        try {
            async function listaProdutos(){
                setLoading(true)
              
                const res = await fetch('https://api-json-ecommerce.vercel.app')
                const dados = await res.json()
                setProducts(dados)
                setFilter(dados)      

                setLoading(false)  
            }
            
            listaProdutos()
                        
        } catch (error) {
            setError('Houve um ero')
           
        }   
        
    }, [])

   



    // cart 
    function handleAddCart(produto, quantity){
        setCartProduct((prevItems) => {
 
         const itemExist =  prevItems.find((item) => item._id === produto._id)
 
          if(itemExist){
            toast.info(`Quantidade do item ${produto.title} atualizada com sucesso`)
            return prevItems.map(item => item._id === produto._id ? {...item, quantity: item.quantity + quantity} : item)
 
 
          } else{
            toast.success(`${produto.title} adicionado com sucesso!`)
            return[...prevItems, {...produto, quantity}]
          }
       })
    }

    function removeItem(_id, title){
        toast.error(`${title} foi removido com sucesso`)
        const removeFilter = cartProduct.filter(item => item._id !== _id)
        setCartProduct(removeFilter)
    }
    
    function handleIncre(_id){
        const updateCart = cartProduct.map(item => {
            if(item._id === _id){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item

        })
        setCartProduct(updateCart)
    }

    function handleDecre(_id){
        const updateCart = cartProduct.map(item => {
            if(item._id === _id){
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
    }).filter(item => item.quantity > 0 )
    
    setCartProduct(updateCart)
    }

    
    function handleAddCartProduct(produto, quantity){
   
        setCartProduct((prevItems) => {
 
         const itemExist =  prevItems.find((item) => item._id === produto._id)
         
          if(itemExist){
            toast.info(`Quantidade do item ${produto.title} atualizada com sucesso`)
            return prevItems.map(item => item._id === produto._id ? {...item, quantity: item.quantity + quantity} : item)
           
 
          } else{
            toast.success(`${produto.title} adicionado com sucesso!`)
            return[...prevItems, {...produto, quantity}]
          }
       }
       
       
       )}
    
    const cartResume = cartProduct.reduce((acc, prod) => {   
        const desc = prod.price - (prod.price * prod.desconto/100)
         
        if(!prod.desconto){
            const soma = acc + prod.price * prod.quantity  
            return soma
         } else {
             const soma = acc + (prod.price - (prod.price * prod.desconto/100)) * prod.quantity
             return soma
        }

  
    }, 0)



    //filter
    function filterProduct(cat){  
        const updateList = products.filter(product => product.title.includes(cat) || product.category.includes(cat))  
        setFilter( updateList)  
    }
    
    
    
    return(
        <ProducContext.Provider value={{ 
            products,       setProducts,
            loading,        setLoading,
            error,          setError,
            filter,         setFilter, 
            cartProduct,    setCartProduct , 
            isCartVisible,  setIsCartVisible,
            search,          setSearch, 
            quantity,       setQuantity,      
            sort,           setSort,
            isLoginOpen,    setIsLoginOpen,
            desconto,       setDesconto,
            isButtonNav,    setIsButtonNav,
            isSearchOpen,   setIsSearchOpen ,
            product,      setProduct,
            filterProduct,  
            handleAddCart,   
            removeItem,
            handleIncre,     
            handleDecre,
            cartResume,       
            handleAddCartProduct,
        
            
        
            }}>

            {children}
        </ProducContext.Provider>
    )
}