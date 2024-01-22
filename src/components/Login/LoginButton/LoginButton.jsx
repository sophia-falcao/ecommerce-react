import { useContext } from "react"
import { ProducContext } from "../../../context/productContext"
import { CiLogin } from "react-icons/ci";
import './LoginButton.css'
import { Login } from "../Login";
import { IoPersonOutline } from "react-icons/io5";
export function LoginButton(){

    const {isLoginOpen, setIsLoginOpen}= useContext(ProducContext)

    return(
        <div>
            <button type="button" className="login_button" onClick={() => setIsLoginOpen(!isLoginOpen)}>
              <span><CiLogin /></span> <span>Login</span> 
            
            </button>
        
            <div className="btn_login_responsive_navBar">
           
            <button type="button" className="login_button_responsive_NavBar" onClick={() => setIsLoginOpen(!isLoginOpen)}>
              <span> <IoPersonOutline /></span>
            </button>
            </div>
        </div>
    )
}