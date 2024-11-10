import { createGlobalStyle } from "styled-components";

export const mainStyle = {
  pcPadding: "9.6%",
  moPadding: "20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
  font-family: 'CurseZombie';
  src: url('/Font/Curse of the Zombie.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body{
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -1px;
    background: linear-gradient(to bottom, #111, #270808);
    color: #fff;
    margin: 0;
    padding: 0;
}

img{
    display: block;
    width: 100%;
}

a{
    text-decoration: none;
}

`;

export const MainTitle = styled;
