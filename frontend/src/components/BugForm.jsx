export default function BugForm({ formData, setFormData, handleSubmit }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="
                bg-white
                rounded-2xl
                shadow-xl
                p-8
                space-y-5
            "
    >
      <input
        type="text"
        placeholder="Bug Title"
        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                "
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
      />

      <textarea
        rows="5"
        placeholder="Description"
        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                "
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value,
          })
        }
      />

      <div className="grid md:grid-cols-2 gap-4">
        <select
          className="
                        border
                        p-4
                        rounded-xl
                    "
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,
              priority: e.target.value,
            })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="
                        border
                        p-4
                        rounded-xl
                    "
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Assigned To"
        className="
                    w-full
                    border
                    p-4
                    rounded-xl
                "
        value={formData.assignedTo}
        onChange={(e) =>
          setFormData({
            ...formData,
            assignedTo: e.target.value,
          })
        }
      />

      <button
        className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    p-4
                    rounded-xl
                    font-semibold
                "
      >
        Save Bug
      </button>
    </form>
  );
}
