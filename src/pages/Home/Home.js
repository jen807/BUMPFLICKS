import { useEffect, useState } from "react";
import MainBanner from "./components/MainBanner";
import Movies from "./components/movies/Movies";
import { MoviesByGenres, genreIds } from "../../api";
import { genreData } from "./components/movies/moviesData/movieData";
import Loading from "../../components/Loading";

const Home = () => {
  const [horror, setHorror] = useState();
  const [thriller, setThriller] = useState();
  const [crime, setCrime] = useState();
  const [documentary, setDocumentary] = useState();
  const [bannerMovie, setBannerMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const genreMap = {
    27: "호러",
    53: "스릴러",
    80: "범죄",
    99: "다큐멘터리",
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const horrorMovies = await MoviesByGenres(genreIds.horror);
        const thrillerMovies = await MoviesByGenres(genreIds.thriller);
        const crimeMovies = await MoviesByGenres(genreIds.crime);
        const documentaryMovies = await MoviesByGenres(genreIds.documentary);

        setHorror(horrorMovies);
        setThriller(thrillerMovies);
        setCrime(crimeMovies);
        setDocumentary(documentaryMovies);

        const allMovies = [
          ...horrorMovies,
          ...thrillerMovies,
          ...crimeMovies,
          ...documentaryMovies,
        ];
        setBannerMovie(allMovies[Math.floor(Math.random() * allMovies.length)]);

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
          {genreData && (
            <div>
              <MainBanner movie={bannerMovie} genreMap={genreMap} />
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
