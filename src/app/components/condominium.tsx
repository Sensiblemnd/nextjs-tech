import Image from "next/image";
import Link from "next/link";
import { Condo } from "../types/condo";

type CondominiumProps = {
  condo: Condo;
};

export const Condominium = ({ condo }: CondominiumProps) => {
  //if no condo return null
  if (!condo) {
    return null;
  }

  return (
    <div className="condo">
      <div
        key={condo.id}
        className=" rounded-lg shadow-md overflow-hidden border border-gray-700 "
      >
        <div className="relative h-48 w-full">
          <Image
            src={condo.imageUrl}
            alt={condo.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{condo.title}</h2>
          <p className=" mb-2">{condo.location}</p>
          <p className=" mb-4">{condo.price}</p>
          <div className="flex justify-between text-sm ">
            <span>{condo.bedrooms} Bedrooms</span>
            <span>{condo.bathrooms} Bathrooms</span>
            <span>{condo.squareFeet} sq ft</span>
          </div>
          <Link
            href={`/condo/${condo.id}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
