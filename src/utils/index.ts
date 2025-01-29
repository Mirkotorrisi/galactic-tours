import { BookingState } from "@/lib/bookingSlice";
import { Passenger } from "@/models/types/passenger";

export const isPassengerInvalid = (passenger: Passenger) => {
  return (
    !passenger.name ||
    !passenger.surname ||
    !passenger.dateOfBirth ||
    !passenger.passportNumber
  );
};

export const calcTotalPrice = (state: BookingState) => {
  if (!state.spaceShip || !state.destination) return 0;
  const numOfPassengers = state.passengers.length;
  const addonsPrice = state.addons?.reduce(
    (acc, addon) => acc + addon.price,
    0
  );
  const spaceShipPrice = state.spaceShip.price * numOfPassengers;
  const destinationPrice = state.destination.basePrice * numOfPassengers;
  return spaceShipPrice + addonsPrice + destinationPrice;
};
