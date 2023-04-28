export async function getAllEvents() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

export async function getFeaturedEvents() {
  const allFeature = await getAllEvents();
  return allFeature.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  return allFeature.find((event) => event.id === id);
}
