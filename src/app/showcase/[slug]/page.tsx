import { getDestination } from "@/actions/getDestination";
import Details from "@/components/showcase/DestinationDetails";

export type PageProps = { params: { slug: string; q?: string } };

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const destination = getDestination(slug);
  return (
    <main className="container flex flex-col">
      <Details destination={destination} />
    </main>
  );
}
