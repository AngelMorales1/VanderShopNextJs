import styles from './navbar.module.scss'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faShoppingBag,faBolt,faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ()=>{
    return(
        <div className={styles.navbar}>
            <Link href="/">
                <div className={styles.buttons}>
                    <FontAwesomeIcon className="apper" icon={faBolt} />
                    <p>VANDER</p>
                </div>
            </Link>
            <div className={styles.inputs}>
                <input className={styles.input} type="text" placeholder="Buscar"/>
                <FontAwesomeIcon className={styles.search} icon={faSearch} />
                <FontAwesomeIcon className={styles.shopping} icon={faShoppingBag} />
                <Link href="/login">
                    <div className={styles.login}>
                        <FontAwesomeIcon className="apper" icon={faSignInAlt} />
                        <p>login</p>
                    </div>
                </Link>
            </div>
        </div>

    )
}