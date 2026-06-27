import { useNavigate, useLocation } from "react-router-dom";
import "./statusPage.css";
<<<<<<< HEAD

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

=======
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

>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
        <div className="overview-item">
          <h3>Completed</h3>
          <span>{completedTasks}</span>
        </div>

        <div className="overview-item">
          <h3>Overall Progress</h3>
          <span>{overallProgress}%</span>
        </div>
<<<<<<< HEAD
      </div>

      <div className="status-card">
        <h2>Task Progress Details</h2>

        <table className="status-table">
=======

      </div>

      <div className="status-card">

        <h2>Task Progress Details</h2>

        <table className="status-table">

>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
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
<<<<<<< HEAD
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
=======

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

>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
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
<<<<<<< HEAD
=======

>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
      </div>

      <button
        className="finish-btn"
        onClick={() => navigate("/completed")}
      >
        Finish Internship
      </button>
<<<<<<< HEAD
=======

>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
    </div>
  );
}

export default StatusPage;