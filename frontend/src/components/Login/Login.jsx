import { useContext } from "react"
import { ProducContext } from "../../context/productContext"
import { NavLink, Link } from "react-router-dom"
import './Login.css'

export function Login(){

    const {isLoginOpen, setIsLoginOpen}= useContext(ProducContext)

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
                <div className="links">
                    <a href="#" className="link" > Esqueceu a senha? </a>
                    <a href="#" className="link"> Não tem uma conta? Cadastre-se </a>
                </div>
                
                <button id="btn_close_login"onClick={() => setIsLoginOpen(false)}> X </button>
            </section>
      
    )
}