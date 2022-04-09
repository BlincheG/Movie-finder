import { Grid, Container } from "@mui/material";
import React, { useState } from "react";
import MovieItem from "../MoviesItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PaginationItems from "../../../components/PaginationItems";
import Loader from "../../../components/Loader";

function MovieResults({movies, status}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,] = useState(6);

  const theme = createTheme();

  // pagination variables
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
  const lengthPagination = Math.round(movies.length / postsPerPage);
  
  if (status === "loading") {
    return (
      <Loader />
    )
  } 

  if (status === "finish") {
    return (
      <ThemeProvider theme={theme}>
        <main>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {currentPosts.map((movie) => (
                <MovieItem movie={movie.show} key={movie.show.id} />
              ))}
            </Grid>
          </Container>
        </main>
        <PaginationItems
          count={lengthPagination}
          handleChange={(page, number) => setCurrentPage(number)}
        />
      </ThemeProvider>
    );
  }
    
  return <></>;
}

export default MovieResults;
