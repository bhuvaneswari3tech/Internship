import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/arinfotek_logo.png"
            alt="AR INFOTEK"
            className="h-14 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 font-semibold text-gray-700">

          <Link
            to="/register"
            className="hover:text-blue-700 transition"
          >
            Register
          </Link>

          <Link
            to="/allocation"
            className="hover:text-blue-700 transition"
          >
            Allocation
          </Link>

          <Link
            to="/status"
            className="hover:text-blue-700 transition"
          >
            Status
          </Link>

          <Link
            to="/interns"
            className="hover:text-blue-700 transition"
          >
            Interns
          </Link>

          <Link
            to="/completed"
            className="hover:text-blue-700 transition"
          >
            Completed
          </Link>

        </nav>
      </div>
    </header>
  );
}

export default Header;