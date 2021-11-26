import { useEffect,useState,useRef}  from "react";
import styles from './catalogo.module.scss'

import Link from "next/dist/client/link";
import {gsap} from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {Typography} from '../../components/atoms/typography/typography.component'
import {data} from '../../assets/data/MOCK_DATA'
import clsx from "clsx";


export const Catalogo = () => {

    const [windowSize, setWindowSize] = useState(1920)
    const [dropDown,setDropDown] = useState(false)

    const categories = [
        {
            title: "Sexo",
            values: ["hombre","mujer","niños/niñas"]
        },{
            title: "Prenda",
            values: ["remera","zapatillas","accesorios"]
        },{
            title: "Talle",
            values: ["L","M","S"]
        }]
    /*
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWindowSize(window.innerWidth)
        })
    },[]);

    const dropdown = useRef()

    const dropDownToggle = ()=>{
        if(dropDown){
            gsap.to(dropdown.current,{display:"grid",opacity:1},"2")
        }else{
            gsap.to(dropdown.current,{display:"none",opacity:0},"2")
        }
        setDropDown(!dropDown)
    }
    */
    return(
        <div className={clsx(styles.page,'container')}>
            <div className="title">
                <Typography variant="h1">Todos los productos de:</Typography>
            </div>

            <div className={styles.sidebar}>
                {windowSize>660?
                    <div className={styles.categorias}>
                        {categories.map((category,idx)=>
                            <div className={styles.categoria} key={idx}>
                                <Typography variant="h2" className="title">{category.title}</Typography>
                                <div className={styles.tipos}>
                                    {category.values.map((value,idx)=>
                                        <Typography variant="p" key={idx}>{value}</Typography>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>:
                    <div className={styles.dropdown} >
                        <div className={styles.toggle} onClick={()=>dropDownToggle()}>
                            <Typography variant="h3" >Categorias</Typography>
                            <FontAwesomeIcon icon={faChevronDown}/>   
                        </div>
                        <div className={styles.categorias} ref={dropdown} style={{display:"none",gridTemplateColumns:`repeat(3,1fr)`,gridTemplateRows:`repeat(${Math.round(categories.length/3)},1fr)`}}>
                            {categories.map((category,idx)=>
                                <div className={styles.categoria} key={idx}>
                                    <Typography variant="h3">{category.title}</Typography>
                                    <div className={styles.tipos}>
                                        {category.values.map((value,idx)=>
                                            <Typography variant="p" key={idx}>{value}</Typography>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
                
            </div>

            <div className={styles.catalogo}>
                <div className={styles.catalogoGrid}>
                    {data.map((item,idx)=>
                        <Link href="/producto/${idx}">
                            <div className={styles.item} key={idx}>
                                <img src={`src/assets/img/${item.img}`} alt="productos"/>
                                <div className={styles.title}>
                                    <Typography variant="h4">{item.name.toUpperCase().slice(0,15)}</Typography>
                                </div>
                                <div className={styles.description}>
                                    <Typography>{item.description}</Typography>
                                </div>
                            </div>  
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}