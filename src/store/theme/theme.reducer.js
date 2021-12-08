import { changeTheme } from "../../utils/changeTheme";
import { darkTheme } from "../../theme/darkTheme";
import { lightTheme } from "../../theme/lightTheme";
import { TOGGLE_THEME } from "./theme.action";

export const initialProps ={
    theme: true
}

export const themeReducer = (state = initialProps, action) => {
    switch(action.type){
        case TOGGLE_THEME:
            if(action.theme == true){
                changeTheme(darkTheme)
                return {
                    ...state,
                    theme: true
                }
            }else{
                changeTheme(lightTheme)
                return {
                    ...state,
                    theme: false
                }
            }
        default:
            return state;
    }
}