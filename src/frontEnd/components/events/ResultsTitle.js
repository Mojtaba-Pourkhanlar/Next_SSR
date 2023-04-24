import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const ResultsTitle = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  
  return (
    <div>
      <h1>Events in {humanReadableDate}</h1>
      <Link href={"/events"} style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Show All Events
        </Button>
      </Link>
    </div>
  );
};

export default ResultsTitle;
