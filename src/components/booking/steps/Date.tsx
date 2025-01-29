import Cta from "@/components/shared/Cta";
import { setStep, setTravelDate } from "@/lib/bookingSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";
import BackButton from "../../shared/BackButton";
import Title from "../../shared/Title";

const DateStep = () => {
  const [date, setDate] = useState("");
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(setTravelDate(date));
    dispatch(setStep(3));
  };

  return (
    <div className="space-y-4 flex flex-col items-start">
      <Title title="Select travel date" />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 bg-gray-800 rounded max-w-72"
        min={new Date().toISOString().split("T")[0]}
      />
      <Cta onClick={handleContinue} className="mt-4" disabled={!date}>
        Continue
      </Cta>
      <BackButton
        step={{
          index: 1,
          name: "destination",
        }}
      />
    </div>
  );
};

export default DateStep;
