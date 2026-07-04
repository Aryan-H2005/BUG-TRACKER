import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import BugForm from "../components/BugForm";

export default function AddBug() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Open",
    assignedTo: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/bugs", formData);

    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <BugForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
