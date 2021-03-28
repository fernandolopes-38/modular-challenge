import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --top-border: #778491;
    --background: #DAE3E7;

    --header: #F5F5F5;
    --icon-background: #B1B7C0;
    --card: #FFFFFF;
    
    --text-title: #49515C;
    --text-subtitle: #687987;
    --subtitle: #5D7080;
    --text-body: #000000;

    --green: #57B952;
    --skillbar-green: #69CA8E;
    --link-green: #06A24E;
    --light-blue: #4B9FC6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--text-body);
  }

  @media(max-width: 1088px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font: 400 16px 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
