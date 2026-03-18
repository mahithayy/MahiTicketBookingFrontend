import { useState } from "react";
import { createShow } from "../api/api";

export default function Admin() {
  const [form, setForm] = useState({ name: "", start_time: "", total_seats: 0 });

  const handleSubmit = async () => {
    try {
      await createShow(form);
      alert("Show created successfully!");
      setForm({ name: "", start_time: "", total_seats: 0 }); // Reset form
    } catch  {
      alert("Error creating show");
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Create New Show</h2>

      <div className="form-card">
        <div className="input-group">
          <label>Show Name</label>
          <input
            value={form.name}
            placeholder="e.g. Avengers: Endgame"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Start Time</label>
          <input
            type="datetime-local"
            value={form.start_time}
            onChange={e => setForm({ ...form, start_time: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label>Total Seats</label>
          <input
            type="number"
            value={form.total_seats || ""}
            placeholder="e.g. 50"
            onChange={e => setForm({ ...form, total_seats: Number(e.target.value) })}
          />
        </div>

        <button className="btn" style={{ width: "100%" }} onClick={handleSubmit}>
          Publish Show
        </button>
      </div>
    </div>
  );
}