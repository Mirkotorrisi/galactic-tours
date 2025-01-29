import Title from "@/components/shared/Title";
import DestinationsList from "@/components/showcase/DestinationsList";
import Hero from "@/components/showcase/Hero";
import KeyFeatures from "@/components/showcase/Keyfeatures";
import destinations from "@/mock/destinations.json";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />
      <DestinationsList />
      <div className="container px-8 mx-auto">
        {destinations.map((d) => (
          <div key={d.slug} className="space-y-2">
            <Title title={d.name} />
            <KeyFeatures features={d.keyFeatures} hideTitle />
          </div>
        ))}
      </div>
    </main>
  );
}
