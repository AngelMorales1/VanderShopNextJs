import Head from 'next/head';
import { Template } from '../../src/components/templates/template.component';
import { Producto } from '../../src/views/producto/producto.component';

function ProductoPage(){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <Template>
                <Producto/>
            </Template>
        </>      
    )
}

export default ProductoPage