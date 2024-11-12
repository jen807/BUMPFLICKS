import styled from "styled-components";

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  font-size: 50px;
  color: ${(props) => (props.filled ? "#E20004" : "rgba(255, 255, 255, 0.2)")};
  position: relative;
  display: inline-block;

  &::before {
    content: "★";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
    color: ${(props) => (props.half ? "#E20004" : "transparent")};
  }
`;

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    if (rating >= starValue)
      return (
        <Star key={index} filled>
          ★
        </Star>
      );
    if (rating >= starValue - 0.5)
      return (
        <Star key={index} half>
          ★
        </Star>
      );
    return <Star key={index}>★</Star>;
  });

  return <StarsContainer>{stars}</StarsContainer>;
};

export default StarRating;
