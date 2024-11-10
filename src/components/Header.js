import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
// import { GlobalStyled } from "../GlobalStyled";

const Container = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 80px;
  padding: 20px ${mainStyle.pcPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  @media screen and (max-width: 650px) {
    padding: 20px ${mainStyle.moPadding};
  }
`;

const Logo = styled.h3`
  font-family: "CurseZombie", sans-serif;
  font-size: 30px;
  letter-spacing: 1px;
  a {
    color: #e20004;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    font-family: "Noto Sans KR";
    letter-spacing: 0.5px;
    margin-left: 150px;
    a {
      color: #fff;
    }
  }
`;

const Header = () => {
  const headerRef = useRef();

  const scrollHandler = () => {
    const pageY = window.scrollY;
    const current = headerRef.current;
    console.log(pageY);
    // console.log(current);

    // current에 대해서 찾아보기

    if (pageY >= 700) {
      current.style.position = "fixed";
      current.style.backgroundColor = "rgba(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
      current.style.zIndex = "990";
    } else {
      current.style.position = "abosolute";
      current.style.backgroundColor = "rgba(0,0,0,0.5)";
      current.style.backdropFilter = "blur(10px)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Container ref={headerRef}>
      <Logo>
        <Link to={"/"}>BUMPFLICKS</Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </Menu>
    </Container>
  );
};

export default Header;
