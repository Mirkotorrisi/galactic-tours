import { AddOn } from "@/models/types/addOn";
import { Destination } from "@/models/types/destination";
import { Passenger } from "@/models/types/passenger";
import { SpaceShip } from "@/models/types/spaceShip";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type BookingState = {
  step: number;
  destination: Destination | null;
  travelDate: string;
  passengers: Passenger[];
  spaceShip: SpaceShip | null;
  addons: AddOn[];
};

const initialState: BookingState = {
  step: 1,
  destination: null,
  travelDate: "",
  spaceShip: null,
  passengers: [],
  addons: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    setDestination: (state, action: PayloadAction<Destination>) => {
      state.destination = action.payload;
    },
    setTravelDate: (state, action: PayloadAction<string>) => {
      state.travelDate = action.payload;
    },
    setSpaceShip: (state, action: PayloadAction<SpaceShip>) => {
      state.spaceShip = action.payload;
    },
    addPassenger: (state, action: PayloadAction<Passenger>) => {
      state.passengers.push(action.payload);
    },
    removePassenger: (state, action: PayloadAction<Passenger>) => {
      state.passengers = state.passengers.filter(
        (p) =>
          p.name !== action.payload.name && p.surname !== action.payload.surname
      );
    },
    updatePassenger: (
      state,
      action: PayloadAction<{ index: number; passenger: Passenger }>
    ) => {
      state.passengers[action.payload.index] = action.payload.passenger;
    },
    toggleAddOn: (state, action: PayloadAction<AddOn>) => {
      if (state.addons.some((a) => a.id === action.payload.id)) {
        state.addons = state.addons.filter(
          (addon) => addon.id !== action.payload.id
        );
      } else {
        state.addons.push(action.payload);
      }
    },
    resetBooking: () => initialState,
  },
});

export const {
  setStep,
  setDestination,
  setTravelDate,
  addPassenger,
  removePassenger,
  toggleAddOn,
  resetBooking,
  updatePassenger,
  setSpaceShip,
} = bookingSlice.actions;

export default bookingSlice.reducer;
