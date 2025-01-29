import { KeyFeature } from "@/models/types/destination";
import { Star } from "lucide-react";

type Props = {
  features: KeyFeature[];
  hideTitle?: boolean;
};

const KeyFeatures = ({ features, hideTitle }: Props) => (
  <div className="mt-16 space-y-8">
    {!hideTitle && (
      <h2 className="text-4xl font-bold text-purple-400">Key Features</h2>
    )}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-purple-900 bg-opacity-30 p-6 rounded-lg space-y-4 "
        >
          <Star className="text-yellow-400 w-8 h-8" />
          <h3 className="text-2xl font-semibold text-purple-300">
            {feature.name}
          </h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default KeyFeatures;
