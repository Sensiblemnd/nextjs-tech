// example component will make a post on button press and get bac a condo
"use client";

import { notFound } from "next/navigation";
import { useState } from "react";
import { Condominium } from "../../components/condominium";
import { Condo } from "../../types/condo";

export default function CondoPage() {
  const [condo, setCondo] = useState<Condo | null>(null);

  return (
    <>
      <div className="min-h-screen p-6">
        <div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const id = formData.get("id");

              const response = await fetch("/api/condos", {
                method: "POST",
                body: JSON.stringify({ id }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              if (!response.ok) {
                notFound(); // This will trigger the 404 page
              }
              const condo: Condo | null = await response.json();

              setCondo(condo ? condo : null);
            }}
          >
            <input
              type="text"
              name="id"
              placeholder="Enter condo ID"
              className="border p-2 rounded mr-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Get Condo Choose 1 - 6
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-6">Luxury Condo Listings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {condo ? <Condominium condo={condo} /> : <p>No condo found</p>}
          </div>
        </div>
      </div>
    </>
  );
}
