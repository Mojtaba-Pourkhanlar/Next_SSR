import React from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "@/data";
import { EventList } from "@frontEnd/components/events/EventList";
import EventsSearch from "@frontEnd/components/events/EventsSearch";
import Layout from "@frontEnd/components/layout";

export const HomePage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <Layout>
        <EventsSearch onSearch={findEventHandler} />
        <EventList list={events} />
      </Layout>
    </div>
  );
};
