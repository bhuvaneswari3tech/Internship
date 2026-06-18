import { useNavigate } from "react-router-dom";
import "./statusPage.css";

function StatusPage() {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      title: "Create React Registration Form",
      progress: 100,
      intern: "Bhuvaneswari",
    },
    {
      id: 2,
      title: "Connect PostgreSQL Database",
      progress: 80,
      intern: "Priya",
    },
    {
      id: 3,
      title: "Build Student Dashboard",
      progress: 60,
      intern: "Karthik",
    },
    {
      id: 4,
      title: "Develop Status Page",
      progress: 40,
      intern: "Arun",
    },
    {
      id: 5,
      title: "Generate Completion Certificate",
      progress: 20,
      intern: "Divya",
    },
  ];

  const getStatus = (progress) => {
    if (progress === 100) return "Completed";
    if (progress > 0) return "In Progress";
    return "Pending";
  };

  const completedTasks = tasks.filter(
    (task) => task.progress === 100
  ).length;

  const overallProgress = Math.round(
    tasks.reduce((sum, task) => sum + task.progress, 0) /
      tasks.length
  );

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
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>

                <td>
                  <button
                    className="status"
                    onClick={() =>
                      navigate("/dashboard", {
                        state: {
                          full_name: task.intern,
                        },
                      })
                    }
                  >
                    {task.intern}
                  </button>
                </td>

                <td>{getStatus(task.progress)}</td>

                <td>{task.progress}%</td>

                <td>
                  <button
                    className="status"
                    onClick={() =>
                      navigate("/update", {
                        state: task,
                      })
                    }
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
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