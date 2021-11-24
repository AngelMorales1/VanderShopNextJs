import Link from "next/link";
import styles from './login.module.scss';
import { Typography } from "../../components/atoms/typography/typography.component";
import {TextField} from "../../components/atoms/textfield/textfield.component";
import {Button} from "../../components/atoms/button/button.component";

export const Loginpage= ()=>{
    return(
        <div className={styles.containerLogin}>
            <div className={styles.loginGrid}>
                <Typography variant="h2">¡Inicia sesion para obtener mas beneficios!</Typography>
                <TextField placeholder="Email" type="text" label="Email"/>
                <TextField placeholder="Contraseña" type="text" label="Contraseña"/>
                <Link href="/register" className={styles.link}>
                    <a><Typography variant="p">No estas registrado?</Typography></a>
                </Link>
                <div className={styles.button}>
                    <Button>Iniciar sesion</Button>
                </div>
            </div>
        </div>
    )
}