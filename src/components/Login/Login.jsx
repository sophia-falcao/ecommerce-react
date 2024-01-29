import { useContext, useState } from "react"
import { ProducContext } from "../../context/productContext"

import './Login.css'

export function Login(){

    const {isLoginOpen, setIsLoginOpen}= useContext(ProducContext)
    const [modalRegisterOpen, setModalRegisterOpen]= useState(false)

    

    return(
      
            <section className={`login ${isLoginOpen ? 'modal_login_open' : ''}`}>
                <h1>Login</h1>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Digite o Seu Email..."  id="email"/>
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <input type="senha" placeholder="Digite a Sua Senha..."  id="senha"/>
                    </div>
                
                    <button>Entrar</button>

                </form>
                <nav className="links">
                    <a href="#" className="link" > Esqueceu a senha? </a>
                    <a href="#" className="link" > Não tem uma conta? Cadastre-se </a>
                   
                    
                </nav>
                
                <button id="btn_close_login"onClick={() => setIsLoginOpen(false)}> X </button>
            </section>
      
    )
}