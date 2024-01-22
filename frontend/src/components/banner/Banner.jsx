import './Banner.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade } from 'swiper/modules';

export function Banner(){

    const images = [
        {id:1 , image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "New Collection"},
        {id:2 , image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        {id:3, image: 'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1600'},
        {id:4, image: 'https://images.pexels.com/photos/19238517/pexels-photo-19238517/free-photo-of-morena-moda-tendencia-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]
    return(
        <div className="container_banner">
            <Swiper
                 modules={[EffectFade]}
                 effect="fade"
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {images.map(item => (
                    <SwiperSlide key={item._id}>
                        <div>
                             <img 
                            src={item.image} 
                            alt="slider"
                            className='slider_item' 
                            />

                            <p>{item.description}</p>

                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}