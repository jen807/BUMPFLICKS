import styled from "styled-components";
// import { ORIGINAL_URL } from "../../../constants/imgUrl";
import { mainStyle } from "../../../GlobalStyled";
// import { useEffect, useState } from "react";
// import { genreIds, RandomMovies } from "../../../api";

const Container = styled.section`
  height: 100vh;
  background-color: black;
  position: relative;
  margin-bottom: 85px;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 0 ${mainStyle.pcPadding};
  position: absolute;
  bottom: 220px;
  left: 0;
  color: #fff;
`;

const BannerGenres = styled.h3`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 30px;
  opacity: 0.8;
`;

const BannerMainTitle = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

const BannerDescText = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  opacity: 0.8;
  line-height: 1.5;
`;

const MainBanner = () => {
  //   const [bannerMovie, setBannerMovie] = useState();

  //   useEffect(() => {
  //     const randomBannerMovie = async () => {
  //       const movie = await RandomMovies();
  //       setBannerMovie(movie);
  //     };

  //     randomBannerMovie();
  //   }, []);

  return (
    <Container>
      <TitleWrap>
        <BannerGenres>
          {/* {bannerMovie.genre_ids
            .map((id) =>
              Object.keys(genreIds).find((key) => genreIds[key] === id)
            )
            .join(", ")} */}
          이건 장르
        </BannerGenres>
        <BannerMainTitle>이건 제목</BannerMainTitle>
        <BannerDescText>
          {/* {bannerMovie.overview.slice(0, 100) + "..."} */}
          이건 설명
        </BannerDescText>
      </TitleWrap>
    </Container>
  );
};

export default MainBanner;
