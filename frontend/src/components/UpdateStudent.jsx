import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./UpdateStudent.css";

function UpdateStudent() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};

  const [task, setTask] = useState(data.task || "");
  const [completion, setCompletion] = useState(
    data.completion || ""
  );
  const [overview, setOverview] = useState("");
  const [status, setStatus] = useState("Going On");

  const handleSubmit = () => {
    alert("Student Progress Updated Successfully");
    navigate("/status");
  };

  return (
    <div className="update-container">

      <div className="update-card">

        <h1>Update Student Progress</h1>

        {/* Task Name */}
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        {/* Completion */}
        <div className="form-group">
          <label>Completion %</label>
          <input
            type="number"
            min="0"
            max="100"
            value={completion}
            onChange={(e) =>
              setCompletion(e.target.value)
            }
          />
        </div>

        {/* Overview */}
        <div className="form-group">
          <label>Overview</label>
          <textarea
            rows="5"
            value={overview}
            onChange={(e) =>
              setOverview(e.target.value)
            }
            placeholder="Enter task overview..."
          />
        </div>

        {/* Status */}
        <div className="form-group">
          <label>Progress Status</label>

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>Going On</option>
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