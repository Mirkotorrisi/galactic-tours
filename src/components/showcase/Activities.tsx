import { Activity } from "@/models/types/destination";
import { Calendar, DollarSign } from "lucide-react";

type Props = {
  activities: Activity[];
  currency: string;
};
const Activities = ({ activities, currency }: Props) => (
  <div className="mt-16 space-y-8">
    <h2 className="text-4xl font-bold text-purple-400">Available Activities</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-blue-900 bg-opacity-30 p-6 rounded-lg space-y-4 hover:bg-opacity-40 transition-colors duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-300">
            {activity.name}
          </h3>
          <p className="text-gray-300">{activity.description}</p>
          <div className="flex justify-between items-center">
            <p className="flex items-center text-gray-300">
              <Calendar className="mr-2 text-blue-400" /> {activity.duration}
            </p>
            <p className="flex items-center text-gray-300">
              <DollarSign className="mr-2 text-blue-400" /> {activity.price}{" "}
              {currency}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Activities;
