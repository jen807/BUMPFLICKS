import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  background: ;
`;

const MainBanner = () => {
  return (
    <Container>
      <TitleWrap>
        <BannerGenres>스릴러, 호러</BannerGenres>
        <BannerMainTitle>돈무브</BannerMainTitle>
        <BannerDescText>이건 영화 설명이에용 호홋</BannerDescText>
      </TitleWrap>
    </Container>
  );
};

export default MainBanner;
