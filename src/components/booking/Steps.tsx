"use client";

import { useAppSelector } from "@/lib/hooks";
import Addons from "./steps/Addons";
import Confirmation from "./steps/Confirmation";
import Date from "./steps/Date";
import Destination from "./steps/Destination";
import Passengers from "./steps/Passengers";

const Steps = () => {
  const { step } = useAppSelector((state) => state.booking);
  switch (step) {
    case 1:
      return <Destination />;
    case 2:
      return <Date />;
    case 3:
      return <Passengers />;
    case 4:
      return <Addons />;
    case 5:
      return <Confirmation />;
    default:
      return <Destination />;
  }
};

export default Steps;
