import { createContext,useContext } from "react";
import { darkTheme } from '../theme/darkTheme';
import { lightTheme } from "../theme/lightTheme";
import { changeTheme } from "../utils/changeTheme";

export const StyleContext = createContext();

export const useStyleContext = ()=> useContext(StyleContext);
 
export const StyleProvider = ({children})=>{

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

