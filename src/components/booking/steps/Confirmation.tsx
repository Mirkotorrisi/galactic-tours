import Cta from "@/components/shared/Cta";
import { resetBooking } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { calcTotalPrice } from "../../../utils";
import Title from "../../shared/Title";

const ConfirmationStep = () => {
  const booking = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();

  const handleConfirm = () => {
    console.log("Booking confirmed:", booking);
    alert("Your journey is booked! Prepare for an unforgettable adventure!");
    dispatch(resetBooking());
  };

  const totalPrice = calcTotalPrice(booking);

  return (
    <div className="space-y-4">
      <Title title="Confirm your booking" />
      <div className="space-y-2">
        <p>
          <strong>Destination:</strong> {booking.destination?.name}
        </p>
        <p>
          <strong>Travel Date:</strong> {booking.travelDate}
        </p>
        <p>
          <strong>Passengers:</strong>
          {booking.passengers.map((p) => p.name).join(", ")}
        </p>
        <p>
          <strong>Add-ons:</strong>
          {booking.addons.map((a) => (
            <span key={a.id}>{a.name}</span>
          ))}
        </p>
        <p>
          <strong>Spaceship:</strong>
          {booking.spaceShip?.name}
        </p>
        <p>
          <strong>Total Price:</strong> {totalPrice} Galactic Credits
        </p>
      </div>
      <Cta onClick={handleConfirm} className="mt-4">
        Confirm Booking
      </Cta>
    </div>
  );
};

export default ConfirmationStep;
