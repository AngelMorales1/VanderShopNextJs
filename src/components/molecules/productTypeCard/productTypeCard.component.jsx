import React from "react"
import Link from 'next/link'
import PropTypes from 'prop-types';
import styles from './productTypeCard.module.scss';
import clsx from "clsx";

export const ProductTypeCard=({image,link,children,imgPosition})=>{

 

    const CardLink = ({children})=>{
        if (link) {
            return (<Link href={link} style={{ textDecoration: 'none' }}>{children}</Link>)
        }else{
            return <>{children}</>
        }
    }

    return(
        <CardLink>
            <div className={clsx(styles.cat)} 
                style={{
                    backgroundImage: `url(assets/${image.value})`,
                    backgroundPosition: `${imgPosition}`
                    }}>
                    
                <div className={clsx(styles.content)}>
                    {children}
                </div>
            </div>
        </CardLink>
        
    )
}

ProductTypeCard.propTypes={
    imgPosition: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.any
}

ProductTypeCard.defaultProps={
    imgPosition: "0 0",
    link: "",
    image: "asda"
}