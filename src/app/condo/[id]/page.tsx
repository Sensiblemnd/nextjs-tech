import { notFound } from "next/navigation";
import { Condominium } from "../../components/condominium";
import { Condo } from "../../types/condo";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  //NEXTJS requires params to be a Promise or it will throw an error
  // see https://nextjs.org/docs/messages/sync-dynamic-apis
  // linting will say this is wrong but it is correct
  //you can use Promise.resolve to convert it to a promise
  // const params = await Promise.resolve(params);
  // If you want to do URL's query string.
  //https://nextjs.org/docs/app/api-reference/functions/use-search-params
  const { id } = await params;

  if (!id) {
    // If the section is not found, return a 404 page
    notFound(); // This will trigger the 404 page
  }
  const response = await fetch("http://localhost:3000/api/condos", {
    cache: "no-store", // Don't cache the response
  });

  if (!response.ok) {
    notFound(); // This will trigger the 404 page
  }
  const condoListings: Condo[] = await response.json();
  const condo = condoListings.find((condo) => condo.id === +id);

  if (!condo) {
    notFound(); // This will trigger the 404 page
  }

  return (
    <>
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6">
          Luxury Condo Listings - Dynamic Route ID: {id}
        </h1>
        {condo && (
          <div className="mt-4 max-w-[400px]">
            <Condominium condo={condo} />
          </div>
        )}
      </div>
      {/* Add more content or components here */}
    </>
  );
}
