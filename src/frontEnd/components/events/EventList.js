import React from "react";
import { Grid } from "@mui/material";

import { DivLayout } from "@frontEnd/helpers";
import EventItem from "./EventItem";
import { getAllEvents } from "@frontEnd/api";
// import { getAllEvents } from "@/data";

export const EventList = ({ list }) => {
  const demo = getAllEvents();
  return (
    <DivLayout>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {list.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <EventItem
              title={item.title}
              image={item.image}
              date={item.date}
              location={item.location}
              id={item.id}
            />
          </Grid>
        ))}
      </Grid>
    </DivLayout>
  );
};
