import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: white;
        font-family: 'Roboto', sans-serif;
    }

    @font-face {
        font-family: "Roboto";
        src: url(${require('../assets/fonts/Roboto-Regular.ttf')}) format("truetype");
    }
    @font-face {
        font-family: "RobotoMedium";
        src: url(${require('../assets/fonts/Roboto-Medium.ttf')}) format("truetype");
    }
    @font-face {
        font-family: "RobotoBold";
        src: url(${require('../assets/fonts/Roboto-Bold.ttf')}) format("truetype");
    }
`;

export default GlobalStyle;