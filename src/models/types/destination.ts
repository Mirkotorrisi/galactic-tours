export type Destination = {
  name: string;
  systemName: string;
  slug: string;
  description: string;
  travelTime: {
    lightSpeed: string;
    warpDrive: string;
    quantumFold: string;
  };
  coordinates: {
    rightAscension: string;
    declination: string;
  };
  images: string[];
  keyFeatures: KeyFeature[];
  activities: Activity[];
  basePrice: number;
  currency: string;
};

export type Activity = {
  name: string;
  description: string;
  duration: string;
  price: number;
};

export type KeyFeature = {
  name: string;
  description: string;
};
