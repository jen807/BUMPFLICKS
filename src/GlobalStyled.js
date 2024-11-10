import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import reset from "styled-reset";

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

export const MainTitle = styled.h2`
  font-size: 44px;
  font-weight: 300;
  font-family: "CurseZombie";
  color: #fff;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
`;

export const SeeAll = styled.h4`
  font-size: 20px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
`;

export const Desctext = styled.p`
  font-weight: 400;
  font-size: 18px;
`;
