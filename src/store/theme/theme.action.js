export const TOGGLE_THEME = 'TOGGLE_THEME'

export function toggleTheme(tema){
    return{
        type: TOGGLE_THEME,
        theme: tema
    }
}
