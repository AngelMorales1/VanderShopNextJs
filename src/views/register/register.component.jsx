import {React} from "react";
import styles from './register.module.scss';
import { Typography } from "../../components/atoms/typography/typography.component";
import {TextField} from "../../components/atoms/textfield/textfield.component";
import {Button} from "../../components/atoms/button/button.component";

export const RegisterPage= ()=>{
    return(
        <div className={styles.containerRegister}>
            <div className={styles.registerGrid}>
                <Typography variant="h2">¡Registrate para obtener mas beneficios!</Typography>
                <TextField placeholder="Email" type="text" label="Email"/>
                <TextField placeholder="Nombre" type="text" label="Nombre"/>
                <TextField placeholder="Contraseña" type="text" label="Contraseña"/>
                <div className={styles.button}>
                    <Button>Registrate ahora</Button>
                </div>
            </div>
        </div>
    )
}