"use server";
import { Condominium } from "../components/condominium";
import { Condo } from "../types/condo";

export default async function CondoPage() {
  //server side fetch needs full url to do this right create soke sort of env variable dev / prod
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
        <h1 className="text-3xl font-bold mb-6">
          Luxury Condo Listings - Sever Side
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {condoListings.map((condo) => (
            <Condominium condo={condo} key={condo.id} />
          ))}
        </div>
      </div>
    </>
  );
}
