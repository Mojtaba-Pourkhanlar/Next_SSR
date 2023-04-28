import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";

const EventId = () => {
  const router = useRouter();

  const eventId = router.query.eventId;

  console.log(eventId);

  if (!eventId) {
    return <h2>No event found! 😒</h2>;
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      
      <Box>
        <Container maxWidth="xl">
        <h1>Moji</h1>
        </Container>
      </Box>
    </div>
  );
};

export default EventId;
