import { Container } from "@mui/material";
import React from "react";

const DivLayout = ({ children }) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <Container maxWidth="xl" disableGutters>
        {children}
      </Container>
    </div>
  );
};

export default DivLayout;
