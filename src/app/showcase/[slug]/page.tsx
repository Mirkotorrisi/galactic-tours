import { getDestination } from "@/actions/getDestination";
import Details from "@/components/showcase/DestinationDetails";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const destination = getDestination(slug);
  return (
    <main className="container flex flex-col">
      <Details destination={destination} />
    </main>
  );
}
