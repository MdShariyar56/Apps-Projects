import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700">
        {error?.statusText || error?.message || "Page not found."}
      </p>
      <p className="mt-2 text-gray-500">
        Go back to{" "}
        <Link to="/" className="text-blue-600 underline">
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
