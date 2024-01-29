import './BannerPrincipal.css'
import imagem_desconto from '../../../assets/imagem_desconto.png'

export function BannerPrincipal(){


    return(
        <div className="container_banner_principal">
            <div>
                <img src={imagem_desconto} alt="" />
            </div>
        </div>
    )
}