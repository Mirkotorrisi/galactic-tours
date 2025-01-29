import { getDestination } from "@/actions/getDestination";
import Details from "@/components/showcase/DestinationDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestination(slug);
  return (
    <main className="container flex flex-col">
      <Details destination={destination} />
    </main>
  );
}
