import Cta from "@/components/shared/Cta";
import { Destination } from "@/models/types/destination";
import { ArrowBigLeft, Clock, Compass, Telescope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  destination: Destination;
};

export default function DestinationDetails({ destination }: Props) {
  return (
    <div className="space-y-8 mx-auto">
      <Link href="/" className="flex gap-2 text-white">
        <ArrowBigLeft />
        Go back
      </Link>
      <h1 className="text-5xl font-bold text-purple-400">{destination.name}</h1>
      <p className="text-xl text-gray-300">{destination.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-300">
            Travel Information
          </h2>
          <div className="space-y-2">
            <p className="flex items-center">
              <Telescope className="mr-2 text-purple-400" /> System:{" "}
              {destination.systemName}
            </p>
            <p className="flex items-center">
              <Clock className="mr-2 text-purple-400" /> Travel Time:
            </p>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li>Light Speed: {destination.travelTime.lightSpeed}</li>
              <li>Warp Drive: {destination.travelTime.warpDrive}</li>
              <li>Quantum Fold: {destination.travelTime.quantumFold}</li>
            </ul>
            <p className="flex items-center">
              <Compass className="mr-2 text-purple-400" /> Coordinates:
            </p>
            <ul className="list-disc list-inside pl-6 space-y-1">
              <li>RA: {destination.coordinates.rightAscension}</li>
              <li>Dec: {destination.coordinates.declination}</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-purple-300">
            Destination Images
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {destination.images.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={`${destination.name} - Image ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            ))}
          </div>
        </div>
      </div>
      <Cta href={`/booking?destination=${destination.slug}`}>
        Book This Journey
      </Cta>
    </div>
  );
}
