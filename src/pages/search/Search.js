import { useForm } from "react-hook-form";
import styled from "styled-components";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { searchMovie } from "../../api";
import { useState } from "react";
import { NO_IMG, W500 } from "../../constants/imgUrl";
// import { Helmet } from "react-helmet-async";
// import PageTitle from "../../components/PageTitle";

// const Container = styled.section`
//   display: flex;
//   justify-content: space-between;
// `;

const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    padding: 0 20px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

const ConWrap = styled.div`
  margin-top: 100px;
  display: grid;
  justify-content: space-between;

  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 30px;
  /* =>공부해보기 */
`;
const Con = styled.div`
  a {
    color: white;
  }
  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  height: 415px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [term, setTerm] = useState();

  const onSearch = async (data) => {
    const { search: keyword } = data;
    try {
      const { results } = await searchMovie(keyword);
      setTerm(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      {/* <PageTitle title="Search" /> */}
      <Form onSubmit={handleSubmit(onSearch)}>
        <input
          {...register("search", {
            required: "영화제목은 필수 입니다.",
          })}
          type="text"
          placeholder="영화제목"
        />
      </Form>

      {term && (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.id}>
              <Link to={`/detail/${data.id}`}>
                <img
                  src={data.poster_path ? W500 + data.poster_path : NO_IMG}
                  alt={data.title}
                />
                <h3>{data.title}</h3>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </Wrapper>
  );
};

export default Search;
