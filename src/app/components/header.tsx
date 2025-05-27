import Link from "next/link";

export const Header = () => {
  return (
    <>
      {/* Header and Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-white">
                Condo Marketplace
              </span>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-indigo-200">
                Home
              </Link>
              <Link
                href="/condo-server"
                className="text-white  hover:text-indigo-200"
              >
                View - server side
              </Link>

              <Link
                href="/condo-client"
                className="text-white  hover:text-indigo-200"
              >
                View - client side
              </Link>
              <Link
                href="/condo/2"
                className="text-white  hover:text-indigo-200"
              >
                View - Dynamic Routes
              </Link>
              <Link
                href="/condo/post"
                className="text-white  hover:text-indigo-200"
              >
                View - URL Param with POST
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
