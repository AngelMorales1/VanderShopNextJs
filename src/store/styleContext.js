import { createContext,useContext } from "react";
import { darkTheme } from '../theme/darkTheme';
import { lightTheme } from "../theme/lightTheme";
import { changeTheme } from "../utils/changeTheme";

const StyleContext = createContext();

export const useStyleContext = ()=> useContext(StyleContext);

const StyleProvider = ({children})=>{

    const toggleTheme = ( toggle )=>{
        if(toggle){
            changeTheme(darkTheme)
        }else {
            changeTheme(lightTheme)
        }
    }

    return(
        <StyleContext.Provider value={toggleTheme}>
            {children}
        </StyleContext.Provider>
    )
}

export default StyleProvider;