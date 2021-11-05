import Head from 'next/head';
import '../src/styles/index.scss'

function App({Component, pageProps}){
    return(
        <>
            <Head>
                <title>Vander Shop</title>
            </Head>
            <Component {...pageProps}/>
        </>      
    )
}

export default App