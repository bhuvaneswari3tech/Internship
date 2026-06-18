import { useNavigate, useLocation } from "react-router-dom";
import "./statusPage.css";
import internData from "../data/internData";

const getStatus = (progress) => {
  if (progress === 100) return "Completed";
  if (progress > 0) return "In Progress";
  return "Pending";
};

function StatusPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Intern data coming from Allocation page
  const intern = location.state || {};

  const tasks = internData?.tasks || [];

  const internName =
    intern.fullName ||
    intern.name ||
    "No Intern Assigned";

  const completedTasks = tasks.filter(
    (task) => task.progress === 100
  ).length;

  const overallProgress =
    tasks.length > 0
      ? Math.round(
          tasks.reduce(
            (sum, task) => sum + task.progress,
            0
          ) / tasks.length
        )
      : 0;

  return (
    <div className="status-container">

      <div className="status-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Work Status & Performance Tracking</p>
      </div>

      <div className="overview-card">

        <div className="overview-item">
          <h3>Total Tasks</h3>
          <span>{tasks.length}</span>
        </div>

        <div className="overview-item">
          <h3>Completed</h3>
          <span>{completedTasks}</span>
        </div>

        <div className="overview-item">
          <h3>Overall Progress</h3>
          <span>{overallProgress}%</span>
        </div>

      </div>

      <div className="status-card">

        <h2>Task Progress Details</h2>

        <table className="status-table">

          <thead>
            <tr>
              <th>Task Name</th>
              <th>Intern Name</th>
              <th>Status</th>
              <th>Completion</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>

            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr key={task.id}>

                  <td>{task.title}</td>

                  <td>
  <button
    className="intern-btn"
    onClick={() =>
      navigate("/dashboard", {
        state: internData.interns.find(
          (i) => i.id === task.internId
        ),
      })
    }
  >
    {
      internData.interns.find(
        (i) => i.id === task.internId
      )?.fullName
    }
  </button>
</td>

                  <td>
                    <span
                      className={`badge ${
                        getStatus(task.progress) === "Completed"
                          ? "completed"
                          : getStatus(task.progress) === "In Progress"
                          ? "progress"
                          : "pending"
                      }`}
                    >
                      {getStatus(task.progress)}
                    </span>
                  </td>

                  <td>
                    <div className="table-progress">
                      <div
                        className="table-fill"
                        style={{
                          width: `${task.progress}%`,
                        }}
                      ></div>
                    </div>

                    <span>{task.progress}%</span>
                  </td>
                  <td>
  <button
    className="update-btn"
    onClick={() =>
      navigate("/task-update", {
        state: {
          task,
          intern: internData.interns.find(
            (i) => i.id === task.internId
          ),
        },
      })
    }
  >
    Update
  </button>
</td>


                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Tasks Available</td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      <div className="status-card">

        <h2>Overall Internship Progress</h2>

        <div className="overall-progress">
          <div
            className="overall-fill"
            style={{
              width: `${overallProgress}%`,
            }}
          ></div>
        </div>

        <p>{overallProgress}% Internship Completed</p>

      </div>

      <button
        className="finish-btn"
        onClick={() => navigate("/completed")}
      >
        Finish Internship
      </button>

    </div>
  );
}

export default StatusPage;