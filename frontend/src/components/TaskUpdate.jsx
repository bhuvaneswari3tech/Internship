import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TaskUpdate.css";

function TaskUpdate() {
  const location = useLocation();
  const navigate = useNavigate();

  const { task, intern } = location.state || {};

  const [progress, setProgress] = useState(
    task?.progress || 0
  );

  const [status, setStatus] = useState(
    task?.progress === 100
      ? "Completed"
      : task?.progress > 0
      ? "In Progress"
      : "Pending"
  );

  const [workDone, setWorkDone] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSave = () => {
    alert("Task Updated Successfully");

    console.log({
      intern,
      task,
      progress,
      status,
      workDone,
      remarks,
      updatedAt:new Date(),
    });

    navigate("/status");
  };

  return (
    <div className="task-update-container">

      <div className="update-card">

        <div className="update-header">
          <h1>Task Update</h1>
          <p>Update Internship Work Progress</p>
        </div>

        <div className="info-grid">

          <div className="info-box">
            <h4>Intern Name</h4>
            <p>{intern?.fullName}</p>
          </div>

          <div className="info-box">
            <h4>Task Name</h4>
            <p>{task?.title}</p>
          </div>

        </div>

        <label>Progress (%)</label>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => {
            const value = Number(e.target.value);

            setProgress(value);

            if (value === 100) {
              setStatus("Completed");
            } else if (value > 0) {
              setStatus("In Progress");
            } else {
              setStatus("Pending");
            }
          }}
        />

        <p className="progress-text">{progress}%</p>

        <label>Status</label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="Pending">
            Pending
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <label>Work Description</label>

        <textarea
          rows="5"
          placeholder="Describe the work completed..."
          value={workDone}
          onChange={(e) =>
            setWorkDone(e.target.value)
          }
        />

        <label>Remarks</label>

        <textarea
          rows="4"
          placeholder="Additional remarks..."
          value={remarks}
          onChange={(e) =>
            setRemarks(e.target.value)
          }
        />

        <div className="button-container">
          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Update
          </button>
        </div>

      </div>

    </div>
  );
}

export default TaskUpdate;