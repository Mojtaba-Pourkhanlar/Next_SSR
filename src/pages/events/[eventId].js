import { Box, Typography } from "@mui/material";
import Layout from "@frontEnd/components/layout";
import { getAllEvents } from "@frontEnd/api";
import { box, boxLayout, boxTitle, divLayout } from "@frontEnd/styles/Style";

const EventId = ({ user }) => {
  return (
    <Layout>
      <div style={divLayout}>
        <div style={boxLayout}>
          <Box sx={box}>
            <Typography variant="h4">ID : {user.id}</Typography>
            <Box>
              <Typography variant="h4">Title : </Typography>
              <Typography variant="h5" color={"#9D9D9D"}>
                {user.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4">Description : </Typography>
              <Typography variant="h6" color={"#9D9D9D"}>
                {user.body}
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${eventId}`
  );
  const user = await res.json();

  if (!user) {
    return {
      notFound: true,
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({
    params: { eventId: event.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default EventId;
