import { createContext } from 'react'
import { themeTemplate } from './theme'
import { ThemeContextProviderProps } from '../../Types.types'

export const ThemeContext = createContext(themeTemplate)

export const ThemeContextProvider =
    ({children}: ThemeContextProviderProps) => {
        return (
            <ThemeContext.Provider value={themeTemplate}>
                {children}
            </ThemeContext.Provider>
        )
}