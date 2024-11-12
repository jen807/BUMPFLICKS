const BaseUrl = "https://api.themoviedb.org/3/";
const options = {
  method: "get",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzkyMzFlYTY4ZTE3YzE5OWNiZDVlM2Q2YjY0MTAxOCIsIm5iZiI6MTczMDc4NTQwNy40OTc5NzM3LCJzdWIiOiI2NzIxYjQ0Zjk3NGE2NzZjNmRmMzNiNmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4QCA62MxVK47KS28YyxRhZr7fNnowXDhm7hwbq1T108",
  },
};

const url = (urlName) => {
  return BaseUrl + `${urlName}?language=ko-kr`;
};

export const genreIds = {
  horror: 27,
  thriller: 53,
  crime: 80,
  documentary: 99,
};

export const MoviesByGenres = async (genreId) => {
  try {
    const response = await fetch(
      url("discover/movie") + `&with_genres=${genreId}`,
      options
    );
    const data = await response.json();
    return data.results.filter((movie) => {
      return movie.genre_ids.includes(genreId);
    });
  } catch (error) {
    console.error(`Error fetching movies for genre ID ${genreId}:`, error);
    return [];
  }
};

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const SimillarMovies = async (movie_id) => {
  try {
    const response = await fetch(
      `${BaseUrl}movie/${movie_id}/similar?language=ko-kr`,
      options
    );

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovie = (keyword) => {
  const searchUrl =
    BaseUrl + `search/movie?query=${keyword}&include_adult=true&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

export const fetchRandomMoviesFromGenres = async () => {
  try {
    const genreKeys = Object.values(genreIds);
    let allMovies = [];
    for (let genreId of genreKeys) {
      const movies = await MoviesByGenres(genreId);
      allMovies = [...allMovies, ...movies];
    }
    return allMovies.sort(() => 0.5 - Math.random()).slice(0, 3);
  } catch (error) {
    console.error("Error fetching random movies from genres:", error);
    return [];
  }
};