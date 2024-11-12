import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NO_IMG, ORIGINAL_URL } from "../../constants/imgUrl";
// import PageTitle from "../../components/PageTitle";
import useScrollTop from "../../lib/useScrollTop";
import Loading from "../../components/Loading";
import Wrapper from "../../components/Wrapper";
import { movieDetail } from "../../api";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px;
  color: #fff;
`;

const Bg = styled.div`
  width: 45%;
  height: 800px;
  background: ${(props) =>
    props.$bgImage
      ? `url(${props.$bgImage}) no-repeat center / cover`
      : `url(${NO_IMG}) no-repeat center / cover`};
  border-radius: 10px;
`;

const TitleWrap = styled.div`
  width: 50%;
  padding: 0 20px;

  h3 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  span {
    font-size: 18px;
    font-weight: 300;
    margin-right: 10px;
  }

  ul {
    list-style: disc;
    margin: 15px 0px 10px 15px;

    li {
      margin-bottom: 10px;
      font-size: 18px;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-top: 30px;
    opacity: 0.8;
  }
`;

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {/* <PageTitle title={data.title} /> */}
          <Wrapper>
            <Container>
              <Bg
                $bgImage={
                  data.poster_path ? ORIGINAL_URL + data.poster_path : NO_IMG
                }
              />
              <TitleWrap>
                <h3>{data.title}</h3>
                <span>{Math.round(data.vote_average * 10) / 10}점</span>
                <span>{data.runtime}분</span>
                <span>개봉 {data.release_date}</span>
                <ul>
                  {/* {data.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))} */}

                  {/* => map erros */}
                </ul>
                <p>{data.overview}</p>
              </TitleWrap>
            </Container>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Detail;
