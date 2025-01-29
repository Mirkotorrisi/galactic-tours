import PassengerForm from "@/components/booking/PassengerForm";
import BackButton from "@/components/shared/BackButton";
import Cta from "@/components/shared/Cta";
import Title from "@/components/shared/Title";
import { addPassenger, setStep, updatePassenger } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Passenger } from "@/models/types/passenger";
import { isPassengerInvalid } from "@/utils";
import { Plus } from "lucide-react";
import { useState } from "react";

const Passengers = () => {
  const { passengers } = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();
  const [showError, setShowError] = useState(false);

  const isInvalid = passengers.some((p) => isPassengerInvalid(p));

  const handleContinue = () => {
    setShowError(true);
    if (isInvalid) {
      alert("Please fill in all the fields");
      return;
    }
    dispatch(setStep(4));
  };

  const handleUpdate = (passenger: Passenger, index: number) => {
    dispatch(updatePassenger({ passenger, index }));
  };

  return (
    <div className="space-y-4 flex flex-col items-start">
      <Title title="Number of passengers" />
      <div className="grid grid-cols-4 w-full items-center gap-4">
        {passengers.map((passenger, index) => (
          <PassengerForm
            key={index}
            passenger={passenger}
            onChange={(p) => handleUpdate(p, index)}
            showError={showError}
          />
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(
            addPassenger({
              name: "",
              surname: "",
              dateOfBirth: "",
              passportNumber: "",
              needsAccessibility: false,
            })
          )
        }
        className="px-3 py-1 bg-gray-700 rounded flex gap-2"
      >
        <Plus size={24} />
        Add a new passenger
      </button>
      <Cta
        onClick={handleContinue}
        className="mt-4"
        disabled={isInvalid || !passengers.length}
      >
        Continue
      </Cta>
      <BackButton step={{ index: 2, name: "date" }} />
    </div>
  );
};

export default Passengers;
