"use client";

import { useEffect, useState } from "react";
import { Condominium } from "../components/condominium";
import { Condo } from "../types/condo";

export default function CondoPage() {
  const [condos, setCondos] = useState<Condo[]>([]);

  // Fetch condo listings from the API
  // This should be done in a useEffect hook in a real application
  useEffect(() => {
    const fetchCondos = async () => {
      const response = await fetch("/api/condos", {
        cache: "no-store", // Don't cache the response
      });

      if (!response.ok) {
        throw new Error("Failed to fetch condo listings");
      }
      const condoListings: Condo[] = await response.json();
      setCondos(condoListings);
    };

    fetchCondos();
  }, []);

  return (
    <>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">
          Luxury Condo Listings - Client Side
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {condos.map((condo) => (
            <Condominium condo={condo} key={condo.id} />
          ))}
        </div>
      </div>
    </>
  );
}
