import SpaceshipCarousel from "@/components/booking/SpaceShipCarousel";
import BackButton from "@/components/shared/BackButton";
import Cta from "@/components/shared/Cta";
import Title from "@/components/shared/Title";
import { setSpaceShip, setStep, toggleAddOn } from "@/lib/bookingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import addonsData from "@/mock/addons.json";
import { AddOn } from "@/models/types/addOn";

export default function AddonsStep() {
  const { addons, spaceShip } = useAppSelector((state) => state.booking);
  const dispatch = useAppDispatch();

  const handleAddonToggle = (addOn: AddOn) => {
    dispatch(toggleAddOn(addOn));
  };

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <Title title="Select your add-ons" />
        {addonsData.map((addon: AddOn) => (
          <div key={addon.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={addon.id}
              checked={addons.some((a) => a.id === addon.id)}
              onChange={() => handleAddonToggle(addon)}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <label htmlFor={addon.id} className="text-lg">
              {addon.name} - {addon.price} Galactic Credits
            </label>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <Title title="Select a Spaceship" />
        <SpaceshipCarousel
          onSelect={(spaceShip) => dispatch(setSpaceShip(spaceShip))}
        />
      </div>
      <Cta
        onClick={() => dispatch(setStep(5))}
        disabled={!spaceShip}
        className="mt-4"
      >
        Review Booking
      </Cta>
      <BackButton
        step={{
          index: 3,
          name: "passengers",
        }}
      />
    </div>
  );
}
