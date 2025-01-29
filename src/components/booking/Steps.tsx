import Addons from "./steps/Addons";
import Confirmation from "./steps/Confirmation";
import Date from "./steps/Date";
import Destination from "./steps/Destination";
import Passengers from "./steps/Passengers";

type Props = {
  step: number;
};

const Steps = ({ step }: Props) => {
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
