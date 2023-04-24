import useStyles from "@frontEnd/styles/Style";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const EventTitle = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.eventTitle}>
      <Container maxWidth="xl">
        <Typography variant="h3" className={classes.eventTitleTypo}>
          {props.title}
        </Typography>
      </Container>
    </Box>
  );
};
