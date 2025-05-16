import Image from "next/image";
import Link from "next/link";

type Condo = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
};

export default async function CondoPage() {
  const response = await fetch("http://localhost:3000/api/condos", {
    cache: "no-store", // Don't cache the response
  });

  if (!response.ok) {
    throw new Error("Failed to fetch condo listings");
  }
  const condoListings: Condo[] = await response.json();

  return (
    <>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">Luxury Condo Listings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {condoListings.map((condo) => (
            <div
              key={condo.id}
              className=" rounded-lg shadow-md overflow-hidden border border-gray-200 "
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
          ))}
        </div>
      </div>
    </>
  );
}
