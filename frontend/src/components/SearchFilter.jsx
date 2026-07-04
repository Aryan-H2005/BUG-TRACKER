export default function SearchFilter({
  search,
  setSearch,
  status,
  setStatus,
  priority,
  setPriority,
}) {
  return (
    <div
      className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            p-5
            mb-6
            flex
            flex-col
            md:flex-row
            gap-4
        "
    >
      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search bugs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
                    flex-1
                    bg-slate-800
                    text-white
                    border
                    border-slate-700
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
      />

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="
                    bg-slate-800
                    text-white
                    border
                    border-slate-700
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                "
      >
        <option value="All">All Status</option>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>

      {/* Priority Filter */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="
                    bg-slate-800
                    text-white
                    border
                    border-slate-700
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                "
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>
  );
}
