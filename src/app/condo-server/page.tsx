"use server";
import Link from "next/link";
import { Condominium } from "../components/condominium";
import { Condo } from "../types/condo";

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
        <Link
          href="/"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-6">Luxury Condo Listings</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {condoListings.map((condo) => (
            <Condominium condo={condo} key={condo.id} />
          ))}
        </div>
      </div>
    </>
  );
}
