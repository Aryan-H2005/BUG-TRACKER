import {
  FaBug,
  FaExclamationCircle,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

export default function Dashboard({ bugs }) {
  const open = bugs.filter((b) => b.status === "Open").length;

  const progress = bugs.filter((b) => b.status === "In Progress").length;

  const resolved = bugs.filter((b) => b.status === "Resolved").length;

  const cards = [
    {
      title: "Total Bugs",
      value: bugs.length,
      icon: <FaBug />,
    },
    {
      title: "Open",
      value: open,
      icon: <FaExclamationCircle />,
    },
    {
      title: "Progress",
      value: progress,
      icon: <FaSpinner />,
    },
    {
      title: "Resolved",
      value: resolved,
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
                        bg-white
                        rounded-2xl
                        shadow-lg
                        p-6
                        hover:shadow-xl
                        transition
                    "
        >
          <div className="flex justify-between">
            <div>
              <p className="text-slate-500">{card.title}</p>

              <h2
                className="
                                text-4xl
                                font-bold
                                mt-2
                            "
              >
                {card.value}
              </h2>
            </div>

            <div
              className="
                            text-3xl
                            text-blue-600
                        "
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
