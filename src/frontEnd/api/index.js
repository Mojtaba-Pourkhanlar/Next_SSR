export async function getAllEvents() {
  const response = await fetch(
    "https://next-ssr-1c859-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allFeature = await getAllEvents();
  return allFeature.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  return allFeature.find((event) => event.id === id);
}
