import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: 'Roboto', sans-serif;
        color: #222222;
    }

    @font-face {
        font-family: "Roboto";
        src: url(${require('./fonts/Roboto-Regular.ttf')}) format("truetype");
    }
    @font-face {
        font-family: "RobotoMedium";
        src: url(${require('./fonts/Roboto-Medium.ttf')}) format("truetype");
    }
    @font-face {
        font-family: "RobotoBold";
        src: url(${require('./fonts/Roboto-Bold.ttf')}) format("truetype");
    }
`;

export default GlobalStyle;