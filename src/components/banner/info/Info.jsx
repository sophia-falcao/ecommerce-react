import './Info.css'
import { FaTruckMoving } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export function Info(){


    return(
        <section className='container_infos'>
            <div>
                <span> <FaTruckMoving /> </span> 
                <p> Frete gratis acima de R$199,00 </p>
            </div>
            <div>
                <span> <CiCreditCard1 /> </span> 
                <p> Parcele em até 6x sem juros </p>
            </div>
            <div>
                <span> <RiVerifiedBadgeFill /></span> 
                <p> Garantia Ishop contra defeitos de fabricação </p>
            </div>
        </section>
    )
}