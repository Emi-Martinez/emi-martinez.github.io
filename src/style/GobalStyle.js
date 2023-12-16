import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html{
        min-height: 100%;
        font-family: 'Nunito';
    }

    body{
        min-height: 100vh;
        margin: 0;
        padding: 0;
    }

    #root{
        min-height: 100vh;
    }
`

export default GlobalStyle