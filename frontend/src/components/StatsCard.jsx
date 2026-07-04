export default function StatsCards({ bugs }) {
  const open = bugs.filter((b) => b.status === "Open").length;

  const progress = bugs.filter((b) => b.status === "In Progress").length;

  const resolved = bugs.filter((b) => b.status === "Resolved").length;

  const cards = [
    { title: "Total", value: bugs.length },
    { title: "Open", value: open },
    { title: "Progress", value: progress },
    { title: "Resolved", value: resolved },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
            bg-white
            rounded-xl
            shadow-md
            p-6
            hover:shadow-xl
            transition
          "
        >
          <p className="text-gray-500">{card.title}</p>

          <h2 className="text-4xl font-bold mt-2">{card.value}</h2>
        </div>
      ))}
    </div>
  );
}
