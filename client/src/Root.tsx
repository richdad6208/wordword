import { Outlet } from "react-router-dom";
import Heading from "./component/Heading";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: inherit;
  font: inherit;
}
ul,
ol {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
html, body {
  height: 100%;
}
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Make images easier to work with */
img,
picture,
svg {
  max-width: 100%;
  display: block;
}

body {
  font-family: 'Pretendard-Regular';
}
`;

const Container = styled.div`
  width: min(1200px, 100% - 4rem);
  margin-inline: auto;
`;

function Root() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading />
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
