import DestinationCard from "@/components/showcase/DestinationCard";
import destinationsData from "@/mock/destinations.json";

const DestinationList = () => (
  <div className="py-16 px-4 mx-auto">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
        Our Cosmic Destinations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinationsData.map((destination) => (
          <DestinationCard
            key={destination.slug}
            slug={destination.slug}
            name={destination.name}
            description={destination.description}
            image={destination.images[0]}
          />
        ))}
      </div>
    </div>
  </div>
);

export default DestinationList;
