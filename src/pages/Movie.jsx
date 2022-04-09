import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Loader from "../components/Loader";
import notFoundImage from "../img/notFoundImage.png";
import { findSingleMovie } from "../api/movies";
import NotFound from '../pages/NotFound'

function Movie() {
  const [status, setStatus] = useState('');
  const [movie, setMovie] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  const {
    name,
    officialSite,
    ended,
    image,
    premiered,
    genres,
    type,
    summary,
    language,
  } = movie;

  useEffect(() => {
    const getMovieData = async () => {
      setStatus('loading')
      try {
        const movieData = await findSingleMovie(params.movie);
        setMovie(movieData.data);
        setStatus('finish')
      }
      catch(errorMessage) {
        setErrorMessage(String(errorMessage))
        setStatus('error')
      }
    };

    getMovieData();
  }, [params.movie]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === 'error') {
    return <NotFound errorMessage={errorMessage} />
  }

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 1024,
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          {image !== null ? (
            <img alt={name} src={image?.medium} />
          ) : (
            <img src={notFoundImage} alt="not-found" />
          )}
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Type: {type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premiered: {premiered}
              </Typography>
              {movie.status === "Ended" ? (
                <Typography variant="body2" color="text.secondary">
                  Ended: {ended}
                </Typography>
              ) : (
                false
              )}
              {officialSite && (
                <Typography variant="body2" gutterBottom>
                  Official site: <a href={officialSite}>{officialSite}</a>
                </Typography>
              )}
              <Typography variant="body2" gutterBottom>
                Language: {language}
              </Typography>
              {genres && (
                <Typography variant="body2" gutterBottom>
                  Genre: {genres?.map((genre) => genre)}
                </Typography>
              )}

              <Typography variant="body2" gutterBottom>
                Summary: {summary?.replace(/<\/?[^>]+(>|$)/g, "")}
              </Typography>
            </Grid>

            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                <Button onClick={() => navigate(-1)}>Back</Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Movie;
