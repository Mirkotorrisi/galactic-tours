"use client";

import spaceships from "@/mock/spaceships.json";
import { SpaceShip } from "@/models/types/spaceShip";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  onSelect: (spaceship: SpaceShip) => void;
};

const SpaceshipCarousel = ({ onSelect }: Props) => {
  const [selectedShip, setSelectedShip] = useState<SpaceShip>(spaceships[0]);

  const handleConfirm = () => {
    onSelect(selectedShip);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="grid lg:grid-cols-2 h-full">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop
          pagination
          navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="col-span-1 max-w-full"
          onSlideChange={(e) => {
            setSelectedShip(spaceships[e.realIndex]);
          }}
        >
          {spaceships.map((ship) => (
            <SwiperSlide
              key={ship.id}
              className="bg-gray-800 rounded-lg overflow-hidden col-span-1"
            >
              <div className="p-4 space-y-4">
                <Image
                  src={ship.image || "/placeholder.svg"}
                  alt={ship.name}
                  width={120}
                  height={300}
                  className="aspect-video w-full object-cover rounded-lg"
                />
                <h3 className="text-2xl font-bold text-purple-400">
                  {ship.name}
                </h3>
                <p className="text-gray-300">{ship.manufacturer}</p>
                <p className="text-xl font-semibold text-green-400">
                  {ship.price} {ship.currency}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {selectedShip && (
          <div className="bg-gray-900 rounded-lg p-6 space-y-4 col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Specifications
                </h3>
                <p>Type: {selectedShip.type}</p>
                <p>Light Speed: {selectedShip.speed.lightSpeed}c</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  Capacity
                </h3>
                <p>Crew: {selectedShip.capacity.crew}</p>
                <p>Passengers: {selectedShip.capacity.passengers}</p>
                <h3 className="text-xl font-semibold text-purple-300 mt-4">
                  Dimensions
                </h3>
                <p>Length: {selectedShip.dimensions.length}</p>
                <p>Width: {selectedShip.dimensions.width}</p>
                <p>Height: {selectedShip.dimensions.height}</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-purple-300">
                Amenities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedShip.amenities.map((amenity, index) => (
                  <div key={index} className="bg-gray-800 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-200">
                      {amenity.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {amenity.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => handleConfirm()}
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
      >
        Select this ship
      </button>
    </div>
  );
};

export default SpaceshipCarousel;
