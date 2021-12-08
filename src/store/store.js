import { createContext, useReducer } from "react";
import {initialProps, themeReducer} from "./theme/theme.reducer"

export const globalContext = createContext();

export const UseGlobalContext = ({children})=>{

    const [theme, dispatch] = useReducer(themeReducer,initialProps)

    return(
        <globalContext.Provider value={{theme,dispatch}}>
            {children}
        </globalContext.Provider>
    )
}