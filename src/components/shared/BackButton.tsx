import { setStep } from "@/lib/bookingSlice";
import { useAppDispatch } from "@/lib/hooks";
import { StepModel } from "@/models/types/step";
import { ArrowBigLeft } from "lucide-react";

type Props = {
  step: StepModel;
};
const BackButton = ({ step }: Props) => {
  const dispatch = useAppDispatch();

  const handleBack = () => {
    dispatch(setStep(step.index));
  };

  return (
    <button onClick={handleBack} className="flex gap-2">
      <ArrowBigLeft />
      Back to {step.name}
    </button>
  );
};

export default BackButton;
