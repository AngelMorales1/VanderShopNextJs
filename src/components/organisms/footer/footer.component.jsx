import styles from './footer.module.scss';
import { Typography } from "../../atoms/typography/typography.component";


export const Footer =()=>{
    return(
        <div className={styles.footer}>
            <Typography variant="p">Sitio Creado por: <a href="https://www.linkedin.com/in/angel-antonio-morales-3a50a419a/" rel="noopener noreferrer" target="_blank">Angel Morales</a></Typography>
        </div>
    )
}