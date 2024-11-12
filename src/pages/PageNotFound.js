import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-family: "CURSEZOMBIE";
  font-size: 80px;
  color: red;
  margin-bottom: 20px;
  z-index: 2;
`;

const Message = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  z-index: 2;
`;

const HandPrint = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  background: url("/imgs/Hand.png") no-repeat center;
  background-size: contain;
`;

const PageNotFound = () => {
  return (
    <PageWrapper>
      <Title>404</Title>
      <Message>SORRY, WE COULDN'T FIND THIS PAGE</Message>
      <HandPrint />
    </PageWrapper>
  );
};

export default PageNotFound;
