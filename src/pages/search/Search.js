import { useForm } from "react-hook-form";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { searchMovie, fetchRandomMoviesFromGenres } from "../../api";
import { useState, useEffect } from "react";
import { NO_IMG, ORIGINAL_URL, W500 } from "../../constants/imgUrl";
import SearchIcon from "../../imgs/SearchIcon.js";
import { genreIds } from "../../api";

const Form = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
  margin-top: 50px;

  input {
    all: unset;
    width: 650px;
    height: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 0 10px;
    font-size: 18px;
    color: white;
    background-color: transparent;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 640px;
  top: 50%;
  transform: translateY(-50%);
`;

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GenreSection = styled.section`
  margin-top: 50px;

  h2 {
    font-family: "CURSEZOMBIE";
    color: white;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Con = styled.div`
  text-align: left;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    font-weight: 200;
    color: white;
    opacity: 0.8;
  }
`;

const RecommendationSection = styled.section`
  margin-top: 50px;

  h2 {
    margin-bottom: 25px;
    font-weight: 400;
  }

  span {
    font-size: 24px;
    margin-bottom: 25px;
    color: white;
    font-family: "CURSEZOMBIE";
    margin-right: 10px;
  }
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [term, setTerm] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    const loadRandomMovies = async () => {
      const movies = await fetchRandomMoviesFromGenres();
      setRandomMovies(movies.slice(0, 3));
    };
    loadRandomMovies();
  }, []);

  const onSearch = async (data) => {
    const { search: keyword } = data;
    if (!keyword) return;
    try {
      const { results } = await searchMovie(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenreName = (genreId) => {
    const genreEntry = Object.entries(genreIds).find(
      ([, id]) => id === genreId
    );
    return genreEntry ? `#${genreEntry[0].toUpperCase()}` : "#ETC";
  };

  const groupedResults = term.reduce((acc, movie) => {
    movie.genre_ids.forEach((id) => {
      const genreName = getGenreName(id);
      if (!acc[genreName]) acc[genreName] = new Set();
      acc[genreName].add(movie);
    });
    return acc;
  }, {});

  const sortedGenres = Object.entries(groupedResults).sort(([a], [b]) => {
    if (a === "#ETC") return 1;
    if (b === "#ETC") return -1;
    return 0;
  });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSearch)}>
        <input
          {...register("search", {
            required: "영화제목은 필수 입니다.",
          })}
          type="text"
          placeholder="영화 제목을 검색해 주세요"
        />
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
      </Form>

      <ConWrap>
        {term.length > 0 ? (
          sortedGenres.map(([genre, movies]) => (
            <GenreSection key={genre}>
              <h2>{genre}</h2>
              <SearchResults>
                {[...movies].map((data) => (
                  <Con key={data.id} isSearchResult>
                    <Link to={`/detail/${data.id}`}>
                      <img
                        src={
                          data.poster_path ? W500 + data.poster_path : NO_IMG
                        }
                        alt={data.title}
                      />
                      <h3>{data.title}</h3>
                    </Link>
                  </Con>
                ))}
              </SearchResults>
            </GenreSection>
          ))
        ) : (
          <RecommendationSection>
            <h2>
              <span>FOR YOU</span>무엇을 검색할지 고민되시나요?
            </h2>
            <SearchResults>
              {randomMovies.map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <img
                      src={
                        data.backdrop_path
                          ? ORIGINAL_URL + data.backdrop_path
                          : NO_IMG
                      }
                      alt={data.title}
                    />
                    <h3>{data.title}</h3>
                  </Link>
                </Con>
              ))}
            </SearchResults>
          </RecommendationSection>
        )}
      </ConWrap>
    </Wrapper>
  );
};

export default Search;
