export type SpaceShip = {
  id: string;
  name: string;
  manufacturer: string;
  type: string;
  image: string;
  price: number;
  currency: string;
  speed: {
    lightSpeed: number;
    warpCapable: boolean;
    maxWarpFactor: number;
    quantumDrive: boolean;
  };
  keyFeatures: string[];
  amenities: {
    name: string;
    description: string;
  }[];
  capacity: {
    crew: number;
    passengers: number;
  };
  dimensions: {
    length: string;
    width: string;
    height: string;
  };
};
