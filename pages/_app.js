import Head from 'next/head';
import '../src/styles/index.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/zoom'

import {UseGlobalContext} from '../src/store/store'

import { motion } from "framer-motion"

function App({Component, pageProps, router}){
    return(
        <>
            <Head>
                <title>VanderShop</title>
            </Head>
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate:{
                    opacity: 1,
                    transition: {
                        duration:0.4
                    }
                }
            }}>
                <UseGlobalContext>
                    <Component {...pageProps}/>
                </UseGlobalContext>
            </motion.div>
        </>      
    )
}

export default App