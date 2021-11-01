import Head from 'next/head';
import { HomePage } from '../src/views/home/home.component';

function Home(){
    return(
        <>
            <Head>Vander-Shop</Head>
            <HomePage/>
        </>      
    )
}

export default Home