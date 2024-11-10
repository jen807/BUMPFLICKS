import { Swiper, SwiperSlide } from "swiper/react";
import {
  mainStyle,
  MainTitle,
  SeeAll,
  SubTitle,
} from "../../../../GlobalStyled";
// import { genreData } from "./moviesData/movieData";
import { W500 } from "../../../../constants/imgUrl";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "swiper/css";
import LineSvg from "../../../../imgs/Line 7";

const MainContainer = styled.section`
  padding: 0 ${mainStyle.pcPadding};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 245px;
  width: 100%;
`;
const TitleWrap = styled.div`
  flex: 0 0 25%;
  height: 519px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Titles = styled.div`
  margin-bottom: 20px;
`;
const SeeAllContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
// const Line = styled.img`
//   width: 215px;
//   height: auto;
// `;

const Con = styled(Link)`
  display: block;
  width: 363px;
  height: 520px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Movies = ({ data, genreData }) => {
  const params = {
    spaceBetween: 20,
    slidesPerView: 3,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
    },
  };

  return (
    <MainContainer>
      <TitleWrap>
        <Titles>
          <MainTitle>#{genreData.genre}</MainTitle>
          <SubTitle>{genreData.desc1}</SubTitle>
          <SubTitle>{genreData.desc2}</SubTitle>
        </Titles>
        <SeeAllContainer to={`/genre/${genreData.genreId}`}>
          <SeeAll>See All</SeeAll>
          <LineSvg />
        </SeeAllContainer>
      </TitleWrap>
      <Swiper {...params}>
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Con to={`/detail/${movie.id}`}>
              <img src={W500 + movie.poster_path} alt={movie.title} />
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainContainer>
  );
};

export default Movies;
