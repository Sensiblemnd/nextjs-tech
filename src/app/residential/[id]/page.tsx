import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps) {
  //NEXTJS requires params to be a Promise or it will throw an error
  // see https://nextjs.org/docs/messages/sync-dynamic-apis
  const { id } = await params;

  if (!id) {
    // If the section is not found, return a 404 page
    notFound();
  }

  return (
    <div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Residential ID: {id}</h2>
        <p>Details about the residential property with ID: {id}</p>
      </div>
      {/* Add more content or components here */}
    </div>
  );
}
