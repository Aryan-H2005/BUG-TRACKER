import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function BugTable({ bugs, deleteBug }) {
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div
      className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
        "
    >
      {bugs.map((bug) => (
        <div
          key={bug._id}
          className="
                        bg-white
                        rounded-2xl
                        shadow-lg
                        p-6
                        hover:shadow-xl
                        transition
                    "
        >
          <div
            className="
                        flex
                        justify-between
                        items-start
                    "
          >
            <h2
              className="
                            text-xl
                            font-bold
                        "
            >
              {bug.title}
            </h2>

            <span
              className={`
                                px-3 py-1
                                rounded-full
                                text-sm
                                ${priorityColor[bug.priority]}
                            `}
            >
              {bug.priority}
            </span>
          </div>

          <p
            className="
                        text-slate-600
                        mt-4
                    "
          >
            {bug.description}
          </p>

          <div
            className="
                        mt-6
                        space-y-2
                    "
          >
            <p>
              <strong>Status:</strong> {bug.status}
            </p>

            <p>
              <strong>Assigned:</strong> {bug.assignedTo}
            </p>
          </div>

          <div
            className="
                        flex
                        gap-3
                        mt-6
                    "
          >
            <Link
              to={`/edit/${bug._id}`}
              className="
                                flex-1
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                py-2
                                rounded-lg
                                flex
                                justify-center
                            "
            >
              <FaEdit />
            </Link>

            <button
              onClick={() => deleteBug(bug._id)}
              className="
                                flex-1
                                bg-red-600
                                hover:bg-red-700
                                text-white
                                py-2
                                rounded-lg
                                flex
                                justify-center
                            "
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
