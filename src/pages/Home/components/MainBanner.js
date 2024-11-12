import styled from "styled-components";
import { ORIGINAL_URL } from "../../../constants/imgUrl";
import { mainStyle } from "../../../GlobalStyled";
// import { genreIds } from "../../../api";

const Container = styled.section`
  height: 100vh;
  background: url(${(props) => `${ORIGINAL_URL}${props.$coverImg}`}) no-repeat
    center / cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding-bottom: 220px;
  margin-bottom: 85px;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 20%,
      #160f0f 100%
    );
    z-index: 1;
  }
`;

const ContentWrap = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  padding: 0 ${mainStyle.pcPadding};
`;

const BannerGenres = styled.h3`
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 15px;
`;

const BannerMainTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
`;

const BannerDescText = styled.p`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.8;
  line-height: 1.6;
`;

const MainBanner = ({ movie, genreMap }) => {
  if (!movie) return null;

  const genreNames = movie.genre_ids
    .map((id) => genreMap[id])
    .filter((name) => name)
    .join(" · ");

  return (
    <Container $coverImg={movie.backdrop_path}>
      <ContentWrap>
        <BannerGenres>{genreNames}</BannerGenres>
        <BannerMainTitle>{movie.title}</BannerMainTitle>
        <BannerDescText>{movie.overview.slice(0, 120) + "..."}</BannerDescText>
      </ContentWrap>
    </Container>
  );
};

export default MainBanner;
