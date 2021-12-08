import styles from './producto.module.scss'
import clsx from 'clsx'
import { Typography } from '../../components/atoms/typography/typography.component'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination,Zoom } from "swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft,faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'


export const Producto = ()=>{

    const prod = [
        {
            id:1,
            name:"Cuprum aceticum Nicotiana",
            img: "5.jpg",
            gender:"hombre",
            description:"Unspecified superficial injury of anus, subsequent encounter",
            price: "$8000"
        },
        {
            id:1,
            name:"Cuprum aceticum Nicotiana",
            img: "1.jpg",
            gender:"hombre",
            description:"Unspecified superficial injury of anus, subsequent encounter",
            price: "$8000"
        },
        {
            id:1,
            name:"Cuprum aceticum Nicotiana",
            img: "3.jpg",
            gender:"hombre",
            description:"Unspecified superficial injury of anus, subsequent encounter",
            price: "$8000"
        }            
    ]

    
    SwiperCore.use([Navigation, Pagination, Zoom]);

    return(
        <>
            <div className={clsx(styles.prodContainer,'container')}>
                <div className={styles.sliderImgProd}>

                    
                </div>
                <div className={styles.descriptionProd}>
                    <Typography variant="h2">{prod[1].name}</Typography>
                    <Typography variant="p" classProp={styles.price}>{prod[1].price}</Typography>
                    <Typography variant="p" classProp={styles.description}>{prod[1].description}</Typography>
                    
                </div>
            </div>
        </>
    )
}