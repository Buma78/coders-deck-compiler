import { createContext, useState } from "react"

interface ThemeContextProps {
    theme:any;
    setTheme: any;
}
export const ThemeStyledContext = createContext<ThemeContextProps | null>(null);
export const ThemeStateProvider = ({children}:{children:any}) => {
    const [theme,setTheme] = useState({background:"white",color:"black"})
    const values : ThemeContextProps= {
        theme : theme,
        setTheme: setTheme
    }
  return (
    <ThemeStyledContext.Provider value={values}>
    {children}
    </ThemeStyledContext.Provider>
  )
}