import { useEffect, useState } from "react";
import { findMovies } from "../../api/movies";
import MovieResults from "./MovieResults/MovieResults";
import MovieSearch from "./MovieSearch/MovieSearch";
import { useSearchParams, useLocation } from "react-router-dom";
import queryString from 'query-string';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const params = useLocation();
  const { q } = queryString.parse(params.search);

  const handleSubmit = async (query) => {
    setSearchParams({ ...searchParams, q: query });
  };

  const formRequest = async (query) => {
    setStatus("loading");
    const response = await findMovies(query);
    setMovies(response.data);
    setStatus("finish");
  }

  useEffect(() => {
    if (q !== "" && q !== undefined) {
      formRequest(q);
    }
  }, [q]);

  return (
    <>
      <MovieSearch onSearchSubmit={handleSubmit} />
      <MovieResults movies={movies} status={status} />
    </>
  );
}

export default Movies;
