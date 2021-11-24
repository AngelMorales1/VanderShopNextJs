import Head from 'next/head';
import { Template } from '../../src/components/templates/template.component';
import { Catalogo } from '../../src/views/catalogo/catalogo.component';

function CatalogoPage(){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <Template>
                <Catalogo/>
            </Template>
        </>      
    )
}

export default CatalogoPage