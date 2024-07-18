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

    --color-01: #F2BE5C;
    --color-02: #73B1BF;
    --color-03: #0477BF;
    --color-b: rgb(6, 6, 27);
    --color-w: rgba(214, 230, 245, 0.322);
    font-family: var(--font-title);
}
`