import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`   

*,
body,
html,
#root {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    --font-title: 'Inter', sans-serif;
    --font-text: 'Inter', serif;

    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
    
    font-family: var(--font-title);
}
`