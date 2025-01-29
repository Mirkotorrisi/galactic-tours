import Steps from "@/components/booking/Steps";
import { Suspense } from "react";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">
        Book Your Interstellar Journey
      </h1>
      <div className="lg:bg-gray-900 rounded-lg lg:p-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Steps />
        </Suspense>
      </div>
    </div>
  );
}
