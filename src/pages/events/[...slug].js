import { getFilteredEvents } from "@/data";
import { EventList } from "@frontEnd/components/events/EventList";
import ResultsTitle from "@frontEnd/components/events/ResultsTitle";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading....</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if (
    isNaN(filterYear) ||
    isNaN(filterMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <>
          <p>Invalid filter, Please adjust your values!</p>;
        </>
        <div className="center">
          <Link href={"/events"} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Show All Events
            </Button>
          </Link>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter</p>
        <div className="center">
          <Link href={"/events"} style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary">
              Show All Events
            </Button>
          </Link>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />

      <EventList list={filteredEvents} />
    </div>
  );
};

export default FilteredEventsPage;
