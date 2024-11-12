import styled from "styled-components";

const SFooter = styled.footer`
  width: 100%;
  height: 150px;
  background-color: #1b0101;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.3);
  margin-top: auto;
`;

const Footer = () => {
  return <SFooter>Copyright</SFooter>;
};

export default Footer;
