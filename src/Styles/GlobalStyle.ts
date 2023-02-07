import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: calc(60% + .8vmin);
        background-color: var(--color-primary);
    }

    :root {
        --color-primary: #2F3248;
        --color-secondary: #25293C;
        --color-sidebar: #03001C;
        --color-text: #C5C8D7;
        --color-notify: #EA5455;
    }
`;