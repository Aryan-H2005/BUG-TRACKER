import { useEffect, useState } from "react";

import api from "../services/api";

import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import SearchFilter from "../components/SearchFilter";
import BugTable from "../components/BugTable";

export default function Home() {
  const [bugs, setBugs] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [priority, setPriority] = useState("All");

  useEffect(() => {
    fetchBugs();
  }, []);

  const fetchBugs = async () => {
    const res = await api.get("/bugs");
    setBugs(res.data);
  };

  const deleteBug = async (id) => {
    await api.delete(`/bugs/${id}`);
    fetchBugs();
  };

  const filteredBugs = bugs.filter((bug) => {
    const searchMatch = bug.title.toLowerCase().includes(search.toLowerCase());

    const statusMatch = status === "All" || bug.status === status;

    const priorityMatch = priority === "All" || bug.priority === priority;

    return searchMatch && statusMatch && priorityMatch;
  });

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <Dashboard bugs={bugs} />

        <SearchFilter
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
        />

        <BugTable bugs={filteredBugs} deleteBug={deleteBug} />
      </div>
    </div>
  );
}
