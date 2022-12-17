import { createContext } from 'react'
import { themeTemplate } from './theme'
import { ThemeContextProviderProps } from '../../Types.types'

// ThemeContext is a context object that provides access to the themeTemplate object to all components within its provider

export const ThemeContext = createContext(themeTemplate)

export const ThemeContextProvider =
    ({children}: ThemeContextProviderProps) => {
        return (
            <ThemeContext.Provider value={themeTemplate}>
                {children}
            </ThemeContext.Provider>
        )
}