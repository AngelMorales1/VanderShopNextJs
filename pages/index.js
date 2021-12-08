import Head from 'next/head';
import { Template } from '../src/components/templates/template.component';
import { HomePage } from '../src/views/home/home.component';

function Home(){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <Template>
                <HomePage/>
            </Template>
        </>      
    )
}

export default Home