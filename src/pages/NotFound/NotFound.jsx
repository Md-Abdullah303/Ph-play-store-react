// NotFound.jsx

import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>

      <p className="text-gray-500 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link to="/">
        <button className="btn btn-primary">🔙 Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
