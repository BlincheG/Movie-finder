import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

function MovieSearch({onSearchSubmit}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === "") {
      alert("Please enter something");
    } else {
      onSearchSubmit(text);
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <Grid item xs="auto">
            <form
              type="submit"
              onSubmit={handleSubmit}
              style={{ display: "flex" }}
            >
              <TextField
                id="standard-basic"
                label="Find movies"
                variant="outlined"
                type="text"
                value={text}
                size="large"
                onChange={(e) => {setText(e.target.value)}}
              />
              <Button
                type="submit"
                disabled={text === ""}
                variant="outlined"
                size="large"
              >
                Find Movies
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MovieSearch;
