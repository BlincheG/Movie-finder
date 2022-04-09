import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../../img/notFoundImage.png";

function MovieItem({ movie }) {
  return (
    <Grid item xs={12} sm={9} md={6}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          image={movie.image !== null ? movie.image?.medium : notFoundImage}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.name}
          </Typography>
          <Typography>
            {movie.summary?.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 150)}
          </Typography>
        </CardContent>
        <CardActions style={{ margin: "0 auto" }}>
          <Box>
            <Button
              variant="contained"
              size="medium"
              component={Link}
              to={`/movie/${movie.name}`}
            >
              View all information
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MovieItem;
