import Head from 'next/head';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '../src/styles/index.scss'
import StyleProvider from '../src/store/styleContext';

function App({Component, pageProps}){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <StyleProvider>
                <Component {...pageProps}/>
            </StyleProvider>
        </>      
    )
}

export default App