import { Alert, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound({ errorMessage }) {
  return (
    <Container>
      <Alert severity="error" sx={{ my: 2 }}>
        {errorMessage}
      </Alert>
    
      <Button component={Link} to="/">
        Go back
      </Button>
    </Container>
  );
}

export default NotFound;
