import { Link } from "react-router-dom";
import { FaBug, FaPlus } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <FaBug className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-white text-2xl font-bold">BugTracker</h1>
            <p className="text-slate-400 text-sm">Issue Management Dashboard</p>
          </div>
        </div>

        <Link
          to="/add"
          className="
                        flex
                        items-center
                        gap-2
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        px-5
                        py-3
                        rounded-xl
                        transition
                    "
        >
          <FaPlus />
          New Bug
        </Link>
      </div>
    </nav>
  );
}
