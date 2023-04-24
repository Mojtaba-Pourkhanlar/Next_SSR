import { useRouter } from "next/router";
import { getEventById } from "@/data";
import { Box, Container } from "@mui/material";
import { EventLogistics } from "@frontEnd/components/events/eventComponents/EventLogistics";
import { EventTitle } from "@frontEnd/components/events/eventComponents/EventTitle";
import useStyles from "@frontEnd/styles/Style";

const EventId = () => {
  const router = useRouter();
  const classes = useStyles();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <h2>No event found! 😒</h2>;
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <EventTitle title={event.title} />
      <Box>
        <Container maxWidth="xl">
          <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
            description={event.description}
          />
        </Container>
      </Box>
    </div>
  );
};

export default EventId;
