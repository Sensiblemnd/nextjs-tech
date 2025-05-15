import Link from "next/link"

export default function NotFound() {
  return (
  
      <div className="flex flex-col items-center justify-center  text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <Link
          href="/"
          className="px-6 py-3 border-gradient  text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    
  )
}
