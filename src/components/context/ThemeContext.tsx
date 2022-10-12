import { createContext } from 'react'
import { themeTemplate } from './theme'

type ThemeContextProviderProps = {
    children: React.ReactNode
}
export const ThemeContext = createContext(themeTemplate)

export const ThemeContextProvider =
    ({children}: ThemeContextProviderProps) => {
        return (
            <ThemeContext.Provider value={themeTemplate}>
                {children}
            </ThemeContext.Provider>
        )
}