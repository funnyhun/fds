import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Spline+Sans:wght@400;500;600&display=swap');

  :root {
    --font-sans: 'Spline Sans', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    --ink-100: #101117;
    --ink-80: #2a2b33;
    --ink-60: #4a4d58;
    --ink-40: #7a7f8c;
    --paper-100: #f6f4ef;
    --paper-90: #efece6;
    --accent-100: #ff8f4a;
    --accent-80: #ffb37c;
    --aqua-80: #8edce6;
    --mint-80: #9be3c6;
    --shadow-strong: 0 24px 40px rgba(16, 17, 23, 0.18);
    --shadow-soft: 0 12px 28px rgba(16, 17, 23, 0.12);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    color: var(--ink-100);
    background:
      radial-gradient(circle at top left, rgba(255, 179, 124, 0.35), transparent 55%),
      radial-gradient(circle at 20% 20%, rgba(142, 220, 230, 0.35), transparent 45%),
      radial-gradient(circle at 80% 10%, rgba(155, 227, 198, 0.3), transparent 50%),
      var(--paper-100);
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;
