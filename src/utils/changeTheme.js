export const changeTheme = (theme)=>{
    const root = document.documentElement
    root.style.setProperty('--color-white',theme.colorWhite)
    root.style.setProperty('--color-black',theme.colorBlack)
}