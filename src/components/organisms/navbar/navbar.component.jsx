import { useState,useContext } from "react";
import Link from "next/link";
import styles from './navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingBag,faBolt,faSignInAlt,faMoon,faSun } from '@fortawesome/free-solid-svg-icons'
import { Typography } from '../../atoms/typography/typography.component';

import { globalContext } from "../../../store/store";

const Navbar = ()=>{
   
    const {dispatch} = useContext(globalContext)

    const [THEME, setTHEME] = useState(true)

    const changeCurrentTheme= ()=>{
        dispatch({type:'TOGGLE_THEME' ,theme: THEME})
        setTHEME(!THEME)
    }

    return(
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.buttons}>
                    <FontAwesomeIcon className="apper" icon={faBolt} />
                    <Typography variant="h1">Vander</Typography>
                </a>
            </Link>
            <div className={styles.inputs}>
                <input className={styles.input} type="text" placeholder="Buscar"/>
                <FontAwesomeIcon className={styles.search} icon={faSearch} />
                <FontAwesomeIcon className={styles.shopping} icon={faShoppingBag} />
                <Link href="/login">
                    <a className={styles.login}>
                        <FontAwesomeIcon className="apper" icon={faSignInAlt} />
                        <Typography variant="h3">Login</Typography>
                    </a>
                </Link>
                {THEME ?
                    <FontAwesomeIcon className={styles.shopping} icon={faMoon} onClick={()=>changeCurrentTheme()}/>
                    :
                    <FontAwesomeIcon className={styles.shopping} icon={faSun} onClick={()=>changeCurrentTheme()}/>   
                }
            </div>
        </div>

    )
}


export default (Navbar)