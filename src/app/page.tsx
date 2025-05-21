import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="stacked">
        <div className="relative h-80 w-full">
          <Image
            src={"https://picsum.photos/id/378/1500/300?random=4"}
            alt={"Hero Image"}
            fill
            className="object-fill"
            sizes="(max-width: 1500px) 100vw, (min-width: 769px) 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl font-medium text-white mb-4">
                Find Your Perfect Condo
              </h1>
              <p className="text-lg text-white mb-6">
                Explore our curated selection of premium condominiums in
                desirable locations. Whether youre looking for modern urban
                living or a peaceful retreat, we have options for you.
              </p>
              <div>
                <Link
                  href="/condo-server"
                  className="inline-block bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition-colors"
                >
                  Browse Available Condos
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 overflow-hidden rounded-lg min-h-[280px] relative h-48 w-full">
              <Image
                src={"https://picsum.photos/id/503/800/300?random=2"}
                alt={"Condo Image"}
                fill
                className="transition duration-250 ease-in-out  hover:scale-125 object-cover"
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-medium text-white mb-6">
            Explore Listing Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
              <h3 className="font-medium mb-2">Server-Side Listings</h3>

              <Link
                href="/condo-server"
                className="text-sm inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                View Condos - server side
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
              <h3 className="font-medium mb-2">Client-Side Listings</h3>

              <Link
                href="/condo-client"
                className="text-sm inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                View Condos - client side
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
              <h3 className="font-medium mb-2">Featured Condo</h3>

              <Link
                href="/condo/2"
                className="text-sm inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                View condo Dynamic Routes
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
              <h3 className="font-medium mb-2">Request Information</h3>

              <Link
                href="/condo/post"
                className="text-sm inline-block bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
              >
                View condo with Form POST/Route
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
