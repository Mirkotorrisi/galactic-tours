"use client";

import { removePassenger } from "@/lib/bookingSlice";
import { useAppDispatch } from "@/lib/hooks";
import passengerFormData from "@/mock/passenger-form.json";
import { Passenger } from "@/models/types/passenger";
import { isPassengerInvalid } from "@/utils";
import { Trash } from "lucide-react";
import type React from "react";
import { useReducer } from "react";
import { twMerge } from "tailwind-merge";

type PassengerAction = {
  field: keyof Passenger;
  value: string | boolean;
};

const passengerReducer = (
  state: Passenger,
  action: PassengerAction
): Passenger => ({
  ...state,
  [action.field]: action.value,
});

type Props = {
  passenger: Passenger;
  onChange: (passenger: Passenger) => void;
  showError: boolean;
};

const PassengerForm = ({ passenger, onChange, showError }: Props) => {
  const [state, dispatch] = useReducer(passengerReducer, passenger);
  const appDispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    dispatch({ field: name as keyof Passenger, value: fieldValue });
    onChange({ ...state, [name]: fieldValue });
  };

  const remove = () => {
    appDispatch(removePassenger(state));
  };

  const errorClass =
    showError && isPassengerInvalid(state) ? "border-red-500" : "";

  return (
    <form
      className={twMerge(
        "col-span-4 grid lg:grid-cols-2 gap-2 bg-slate-700 rounded-md p-2 border border-transparent",
        errorClass
      )}
    >
      {passengerFormData.map((field) => (
        <div
          key={field.field}
          className="flex flex-col justify-start items-start"
        >
          <label
            htmlFor={field.field}
            className="block text-sm font-medium text-gray-300"
          >
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.field}
            name={field.field}
            value={
              state[field.field as keyof Passenger] as HTMLInputElement["value"]
            }
            onChange={handleChange}
            className="mt-1 rounded-md bg-gray-800 border-gray-700 text-white px-2 py-1"
            required={field.required}
          />
        </div>
      ))}
      <button
        className="bg-red-500 font-bold flex gap-2 px-2 py-1 rounded-lg mr-auto"
        onClick={remove}
      >
        <Trash /> Remove
      </button>
    </form>
  );
};

export default PassengerForm;
