import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./UpdateStudent.css";

function UpdateStudent() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};

  const [task, setTask] = useState(data.task || "");
  const [completion, setCompletion] = useState(data.completion || 0);
  const [overview, setOverview] = useState("");
  const [status, setStatus] = useState(data.status || "In Progress");

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    const previousHistory =
      JSON.parse(localStorage.getItem("overviewHistory")) || [];

    const updatedHistory = [
      ...previousHistory,
      {
        task,
        overview,
        completion: Number(completion),
        status,
        date: currentDate,
        time: currentTime,
      },
    ];

    localStorage.setItem(
      "overviewHistory",
      JSON.stringify(updatedHistory)
    );

    alert("Student Progress Updated Successfully");

    navigate("/dashboard", {
      state: {
        fullName: data.fullName,
        email: data.email,
        collegeName: data.collegeName,
        branch: data.branch,
        year: data.year,
        domain: data.domain,

        task,
        completion: Number(completion),
        status,
        overview,

        overviewHistory: updatedHistory,
      },
    });
  };

  return (
    <div className="update-container">
      <div className="update-card">

        <h1>Update Student Progress</h1>

        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Completion (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={completion}
            onChange={(e) => setCompletion(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Overview</label>
          <textarea
            rows="5"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            placeholder="Enter task overview"
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>

        <button
          className="save-btn"
          onClick={handleSubmit}
        >
          Save Update
        </button>

      </div>
    </div>
  );
}

export default UpdateStudent;