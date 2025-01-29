"use client";

import { getDestination } from "@/actions/getDestination";
import Steps from "@/components/booking/Steps";
import { setDestination } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function BookingPage() {
  const query = useSearchParams();

  const dispatch = useAppDispatch();
  const { step } = useAppSelector((state) => state.booking);

  useEffect(() => {
    const slug = query.get("destination");
    if (!slug) return;
    const destination = getDestination(slug);
    if (destination) dispatch(setDestination(destination));
  }, [query, dispatch]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Book Your Interstellar Journey
        </h1>
        <div className="lg:bg-gray-900 rounded-lg lg:p-6">
          <Steps step={step} />
        </div>
      </div>
    </div>
  );
}
