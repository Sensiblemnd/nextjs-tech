import Link from "next/link";
import { notFound } from "next/navigation";
import { Condominium } from "../../components/condominium";
import { Condo } from "../../types/condo";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  //NEXTJS requires params to be a Promise or it will throw an error
  // see https://nextjs.org/docs/messages/sync-dynamic-apis
  // linting will say this is wrong but it is correct
  //you can use Promise.resolve to convert it to a promise
  // const params = await Promise.resolve(params);

  const { id } = await params;

  if (!id) {
    // If the section is not found, return a 404 page
    notFound();
  }
  const response = await fetch("http://localhost:3000/api/condos", {
    cache: "no-store", // Don't cache the response
  });

  if (!response.ok) {
    throw new Error("Failed to fetch condo listings");
  }
  const condoListings: Condo[] = await response.json();
  const condo = condoListings.find((condo) => condo.id === +id);

  return (
    <div>
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-bold">Residential Property Details</h2>
        {condo && (
          <div className="mt-4 max-w-[400px]">
            <Condominium condo={condo} />
          </div>
        )}
      </div>
      {/* Add more content or components here */}
    </div>
  );
}
