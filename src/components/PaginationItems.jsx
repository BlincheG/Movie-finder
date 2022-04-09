import { Container, Grid, Pagination } from "@mui/material";

export default function PaginationItems({ count, handleChange }) {
  if (count) {
    return (
      <Container>
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item xs={3} mb={2}>
            <Pagination
              count={count}
              variant="outlined"
              onChange={(page, number) => handleChange(page, number)}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
