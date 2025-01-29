import Image from "next/image";
import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const DestinationCard = ({ slug, name, description, image }: Props) => {
  return (
    <Link href={`/showcase/${slug}`} className="block">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-purple-400 mb-2">
            {name}
          </h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
