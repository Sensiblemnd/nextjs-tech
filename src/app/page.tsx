import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>My App home</div>
      <div className="p-4">
        <h2 className="text-lg font-bold">Welcome to the Home Page</h2>
        <p>This is the main page of the application.</p>
        <div className="flex gap-4">
          <Link
            href="/condo"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Condos
          </Link>
          <Link
            href="/residential/123"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Residential
          </Link>
        </div>
      </div>
    </div>
  );
}
