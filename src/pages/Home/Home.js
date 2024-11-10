import { useEffect, useState } from "react";
import MainBanner from "./components/MainBanner";
import Movies from "./components/movies/Movies";
import { MoviesByGenres, genreIds } from "../../api";
import { genreData } from "./components/movies/moviesData/movieData";
import Loading from "../../components/Loading";

const Home = () => {
  const [horror, setHorror] = useState([]);
  const [thriller, setThriller] = useState([]);
  const [crime, setCrime] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setHorror(await MoviesByGenres(genreIds.horror));
        setThriller(await MoviesByGenres(genreIds.thriller));
        setCrime(await MoviesByGenres(genreIds.crime));
        setDocumentary(await MoviesByGenres(genreIds.documentary));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner />
          <Movies
            data={horror}
            genreData={genreData.find((item) => item.genreId === 27)}
          />
          <Movies
            data={thriller}
            genreData={genreData.find((item) => item.genreId === 53)}
          />
          <Movies
            data={crime}
            genreData={genreData.find((item) => item.genreId === 80)}
          />
          <Movies
            data={documentary}
            genreData={genreData.find((item) => item.genreId === 99)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
