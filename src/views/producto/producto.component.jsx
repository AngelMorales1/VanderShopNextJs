import styles from './producto.module.scss'
import clsx from 'clsx'
import { Typography } from '../../components/atoms/typography/typography.component'

export const Producto = ()=>{

    const prod = {
        id:1,
        name:"Cuprum aceticum Nicotiana",
        img: "5.jpg",
        gender:"hombre",
        description:"Unspecified superficial injury of anus, subsequent encounter"
    }

    return(
        <>
            <div className={clsx(styles.container,'container')}>
                <Typography variant="h1">{prod.name}</Typography>
            </div>
        </>
    )
}