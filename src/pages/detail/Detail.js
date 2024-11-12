import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { NO_IMG, ORIGINAL_URL } from "../../constants/imgUrl";
import useScrollTop from "../../lib/useScrollTop";
import Loading from "../../components/Loading";
import Wrapper from "../../components/Wrapper";
import { SimillarMovies, movieDetail } from "../../api";
import useStarRating from "../../lib/useStarRating";
import StarRating from "../../components/StarRating";

const Container = styled.div`
  position: relative;
  color: #fff;
  margin-top: 60px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 900px;
  background: ${(props) =>
    props.$bgImage
      ? `url(${props.$bgImage}) no-repeat center / cover`
      : "black"};
  filter: blur(8px);
  opacity: 0.3;
  z-index: -1;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to bottom,
      rgba(11, 11, 11, 0) 0%,
      #270808 100%
    );
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Bg = styled.div`
  width: 493px;
  height: 706px;
  background: ${(props) =>
    props.$bgImage
      ? `url(${props.$bgImage}) no-repeat center / cover`
      : `url(${NO_IMG}) no-repeat center / cover`};
`;

const StarWrap = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TitleWrap = styled.div`
  margin-left: 126px;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  span {
    font-size: 50px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 5px;

    li {
      margin-bottom: 30px;
      font-size: 22px;
      font-weight: 400;
    }
  }

  h5 {
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.6;
    margin-top: 40px;
    opacity: 0.5;
  }
`;

const SimillarContainer = styled.section`
  margin-top: 87px;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 400;
    span {
      font-size: 24px;
      margin-right: 5px;
      font-weight: 500;
    }
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SimilarMovie = styled.div`
  width: 100%;
  text-align: left;
  img {
    width: 374px;
    height: 212px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 16px;
    font-weight: 200;
  }
`;

const MoviesWrap = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: #fff;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);

        const similarData = await SimillarMovies(id);
        setSimilarMovies(similarData.slice(0, 4));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const roundedRating = useStarRating(data?.vote_average / 2 || 0);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Wrapper>
            <Background $bgImage={ORIGINAL_URL + data.backdrop_path} />
            <Container>
              <Content>
                <Bg
                  $bgImage={
                    data.poster_path ? ORIGINAL_URL + data.poster_path : NO_IMG
                  }
                />
                <TitleWrap>
                  <ul>
                    {data.genres.map((genre, index) => (
                      <li key={genre.id}>
                        {genre.name}
                        {index < data.genres.length - 1 && " ·"}
                      </li>
                    ))}
                  </ul>
                  <h3>{data.title}</h3>
                  <StarWrap>
                    <StarRating rating={roundedRating} />
                  </StarWrap>
                  <h5>
                    개봉 {data.release_date} · {data.runtime} 분
                  </h5>
                  <p>{data.overview}</p>
                </TitleWrap>
              </Content>
            </Container>

            <SimillarContainer>
              <h2>
                <span>‘{data.title}’</span> 이(가) 마음에 드신다면
              </h2>
              <MoviesWrap>
                {similarMovies.map((movie) => (
                  <Link to={`/detail/${movie.id}`} key={movie.id}>
                    <SimilarMovie>
                      <img
                        src={
                          movie.backdrop_path
                            ? ORIGINAL_URL + movie.backdrop_path
                            : NO_IMG
                        }
                        alt={movie.title}
                      />
                      <h3>{movie.title}</h3>
                    </SimilarMovie>
                  </Link>
                ))}
              </MoviesWrap>
            </SimillarContainer>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Detail;
