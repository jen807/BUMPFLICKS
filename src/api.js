const BaseUrl = "https://api.themoviedb.org/3/";
const optinos = {
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

const genreIds = {
  horror: 27,
  thriller: 53,
  crime: 80,
  documentary: 99,
};

const Movies = async () => {
  try {
    const response = await fetch(
      url(`discover/movie`) + `&with_genres=${genreId}`,
      optinos
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const 
