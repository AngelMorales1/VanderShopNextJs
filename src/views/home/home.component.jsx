import { useRef, useEffect } from "react";
import { Button } from "../../components/atoms/button/button.component";
import Image from 'next/image'
import styles from './home.module.scss'
import clsx from 'clsx'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";

//import { timeline } from "../../App";

import { Typography } from "../../components/atoms/typography/typography.component";
import {ProductTypeCard} from "../../components/molecules/productTypeCard/productTypeCard.component"
import hombre from '../../assets/img/hombre.jpg';
import mujer from '../../assets/img/mujer.jpg';
import ninos from '../../assets/img/ninos.jpg';
import {data} from '../../assets/data/MOCK_DATA'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft,faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

export const HomePage = () => {
    /* ANIMACIONES NAVBAR Y BANNER
        const boxRef= useRef()
        const banner= useRef()

        useEffect(() => {
            timeline.from(boxRef.current, { x: "-300", opacity:"0"},"0.6")
                    .to(banner.current,{scale:1.1,duration:"2",repeat:"-1",yoyo:true})
        },[]);
        */

    SwiperCore.use([Navigation, Pagination]);

    return(
        <div>
            <div className={styles.banner} >
                <div className={styles.img}/>
                <div className={styles.text}>
                    <div className={styles.content}>
                        <Typography variant="h1" color="white">RECONECTA CON TU ENERGIA</Typography>
                        <Typography variant="h3" color="white" >NUEVAS Zig Dynamarca</Typography>
                        <Button color="black" margin="10px 5px">COMPRA AHORA</Button>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.main,`container`)}>
                <div className={styles.popular}>
                    <Typography variant="h1">¿QUE ESTAS BUSCANDO?</Typography>
                    <div className={styles.btnDiv}>
                        <Button color="white" border="1px solid grey">INDUMENTARIA</Button>
                        <Button color="white" border="1px solid grey">CALZADO</Button>
                        <Button color="white" border="1px solid grey">ACCESORIOS</Button>
                    </div>
                </div>

                <div className={styles.sexosCat}>
                    <Typography variant="h1" >PARA QUIEN COMPRAS? </Typography>
                    <div className={styles.catSexosDiv}>
                        <ProductTypeCard image={hombre} imgPosition="50% 0" link="/catalogo/hombre">Nombre</ProductTypeCard>
                        <ProductTypeCard image={mujer} imgPosition="100% 0" link="/catalogo/mujer">Mujer</ProductTypeCard>
                        <ProductTypeCard image={ninos} imgPosition="100% 50%" link="/catalogo/ninos">Niños</ProductTypeCard>
                    </div>
                </div>
                
                {
                <div className={styles.novedades}>
                    <Typography variant="h1">NOVEDADES</Typography>
                    <div className="novedades-slider">
                        <Swiper
                            navigation= {{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            pagination= {{
                                el: '.swiper-pagination',
                                type: 'bullets',
                            }}
                            spaceBetween={5}
                            slidesPerView={5}
                            >
                            {data.map((item,idx)=>(
                                <SwiperSlide className="swiper-slide" key={idx}>
                                   <div className="swiper-item">
                                        <Image src={`/img/${item.img}`} alt="Novedades" width={500} height={500}/>
                                        <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                                   </div>
                                </SwiperSlide>
                            ))}
                            <div className={clsx(styles.navigation,'swiper-button-next')}>
                                <FontAwesomeIcon icon={faLongArrowAltRight}/>
                            </div>
                            <div className={clsx(styles.navigation,'swiper-button-prev')}>
                                <FontAwesomeIcon icon={faLongArrowAltLeft}/>
                            </div>
                        </Swiper>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}