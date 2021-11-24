import Head from "next/head";
import { Template } from "../src/components/templates/template.component";
import { RegisterPage } from "../src/views/register/register.component";

function Register(){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <Template>
                <RegisterPage/>
            </Template>
        </>
    )
}

export default Register