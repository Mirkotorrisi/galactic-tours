import destinations from "@/mock/destinations.json";

export const getDestination = (slug: string) => {
  const destination = destinations.find(
    (destination) => destination.slug === slug
  );
  if (!destination) throw new Error("Destination not found");
  return destination;
};
