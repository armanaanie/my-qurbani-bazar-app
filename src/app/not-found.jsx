import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      
      <h1 className="text-6xl font-bold text-error">404</h1>
      
      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Oops! The page you are looking for doesn’t exist or may have been moved.
        Let’s get you back to the Qurbani Online Bazar 🐄
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="btn btn-primary"
        >
          Go Back Home
        </Link>
      </div>

    </div>
  );
}