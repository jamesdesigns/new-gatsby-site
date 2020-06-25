import React from 'react'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { Global, css } from '@emotion/core'

const ThemeProvider = ({theme, children}) => {

    const GlobalStyles = () => (
        <Global
            styles={css`
                html {
                    box-sizing: border-box;
                    font-family: ${theme.fonts.body.family};
                }

                a {
                    color: ${theme.color.dark};

                    &:hover {
                        color: ${theme.color.primary};
                    }
                }
            `}
        />
    )

    return (
        <EmotionThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </EmotionThemeProvider>
    )
}

export default ThemeProvider