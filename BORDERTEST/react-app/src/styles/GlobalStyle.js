import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: radial-gradient(circle at top right, #10142a 0%, #08090f 60%);
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  a { color: inherit; text-decoration: none; }
  button, input { font: inherit; }
`;
