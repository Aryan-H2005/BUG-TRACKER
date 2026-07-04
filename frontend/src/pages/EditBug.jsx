import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../services/api";
import BugForm from "../components/BugForm";

export default function EditBug() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Open",
    assignedTo: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch bug by ID
  useEffect(() => {
    const fetchBug = async () => {
      try {
        const res = await api.get(`/bugs/${id}`);

        setFormData({
          title: res.data.title || "",
          description: res.data.description || "",
          priority: res.data.priority || "Low",
          status: res.data.status || "Open",
          assignedTo: res.data.assignedTo || "",
        });
      } catch (error) {
        console.error(error);
        alert("Failed to fetch bug");
      } finally {
        setLoading(false);
      }
    };

    fetchBug();
  }, [id]);

  // Update bug
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/bugs/${id}`, formData);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update bug");
    }
  };

  if (loading) {
    return <div className="flex justify-center mt-20">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Edit Bug</h1>

      <BugForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
