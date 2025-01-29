"use client";

import { getDestination } from "@/actions/getDestination";
import Cta from "@/components/shared/Cta";
import { setDestination, setStep } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Title from "../../shared/Title";
import KeyFeatures from "../../showcase/Keyfeatures";

const DestinationStep = () => {
  const query = useSearchParams();

  const dispatch = useAppDispatch();
  const destination = useAppSelector((state) => state.booking.destination);

  useEffect(() => {
    const slug = query.get("destination");
    if (!slug) return;
    const destination = getDestination(slug);
    if (destination) dispatch(setDestination(destination));
  }, [query, dispatch]);

  return (
    <div className="space-y-4">
      <Title title="Your Destination:" />
      <p className="text-4xl font-semibold text-purple-300">
        {destination?.name}
      </p>
      <KeyFeatures features={destination?.keyFeatures ?? []} hideTitle />
      <Cta onClick={() => dispatch(setStep(2))}>Confirm Destination</Cta>
      <Link href="/" className="flex gap-2">
        <ArrowBigLeft />
        Choose another destination
      </Link>
    </div>
  );
};

export default DestinationStep;
