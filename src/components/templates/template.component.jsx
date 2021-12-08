import Navbar from '../organisms/navbar/navbar.component';
import {Footer} from '../organisms/footer/footer.component';

export const Template = ({children})=>{
    return(
        <div>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}