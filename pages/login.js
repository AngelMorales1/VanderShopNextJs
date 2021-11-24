import Head from 'next/head';
import { Template } from "../src/components/templates/template.component";
import { Loginpage } from '../src/views/login/login.component';

function Login(){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <Template>
                <Loginpage/>
            </Template>
        </>
    )
}

export default Login