import { useMemo } from "react";

const useStarRating = (rating) => {
  return useMemo(() => {
    return Math.round(rating * 2) / 2;
  }, [rating]);
};

export default useStarRating;
