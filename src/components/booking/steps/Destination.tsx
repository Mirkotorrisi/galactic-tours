import Cta from "@/components/shared/Cta";
import { setStep } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import Title from "../../shared/Title";
import KeyFeatures from "../../showcase/Keyfeatures";

export default function DestinationStep() {
  const { destination } = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();

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
}
