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
  src: url('/Fonts/Curse of the Zombie.ttf') format('truetype');
}


body{
  font-family:"Noto Sans KR", sans-serif;
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
  font-size: 46px;
  font-weight: 300;
  font-family: "CurseZombie", sans-serif;
  color: #fff;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  color: #fff;
  opacity: 0.8;
  letter-spacing: 0.5px;
  margin-top: 5px;
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
