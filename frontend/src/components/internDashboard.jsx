import { useLocation } from "react-router-dom";
import "./internDashboard.css";


function InternDashboard() {
  const location = useLocation();

  const data = location.state || {};

<<<<<<< HEAD
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  // Get all saved updates from localStorage
  const overviewHistory =
    JSON.parse(localStorage.getItem("overviewHistory")) || [];
=======
  const intern = selectedIntern || {};
    
  const tasks = internData.tasks;

  const tasksAssigned = tasks.length;

  const tasksCompleted = tasks.filter(
    (task) => task.progress === 100
  ).length;

  const percentage =
    tasks.length > 0
      ? Math.round(
          tasks.reduce(
            (sum, task) => sum + task.progress,
            0
          ) / tasks.length
        )
      : 0;
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">
          AR Infotek Internship Portal
        </h1>

        <p className="dashboard-subtitle">
          Intern Dashboard
        </p>
      </div>

      {/* Statistics */}

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Completion</h3>
          <span>{data.completion || 0}%</span>
        </div>

        <div className="stat-card">
          <h3>Status</h3>
          <span>{data.status || "Going On"}</span>
        </div>

        <div className="stat-card">
          <h3>Domain</h3>
          <span>{data.domain || "Cloud Computing"}</span>
        </div>
      </div>

      {/* Student Information */}

      <div className="dashboard-card">
        <h2>Student Information</h2>

        <div className="details-grid">
<<<<<<< HEAD
          <p>
            <strong>Name:</strong>{" "}
            {data.fullName || "Bhuvaneswari"}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {data.email || "bhuvaneswari@gmail.com"}
          </p>

          <p>
            <strong>College:</strong>{" "}
            {data.collegeName || "Adhiyamaan College"}
          </p>

          <p>
            <strong>Branch:</strong>{" "}
            {data.branch || "Computer Science"}
          </p>

          <p>
            <strong>Year:</strong>{" "}
            {data.year || "3rd Year"}
          </p>

          <p>
            <strong>Domain:</strong>{" "}
            {data.domain || "Cloud Computing"}
          </p>
        </div>
=======

       <p>
  <strong>Name:</strong> {intern?.fullName}
</p>

<p>
  <strong>Email:</strong> {intern?.email}
</p>

<p>
  <strong>Domain:</strong> {intern?.domain}
</p>

<p>
  <strong>Status:</strong> {intern?.status}
</p>

<p>
  <strong>College:</strong> {intern?.college_name}
</p>

<p>
  <strong>Branch:</strong> {intern?.branch}
</p>   
</div>
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
      </div>

      {/* Internship Details */}

      <div className="dashboard-card">
        <h2>Internship Details</h2>

        <div className="details-grid">
          <p>
            <strong>Task Name:</strong>{" "}
            {data.task || "No Task Assigned"}
          </p>

          <p>
            <strong>Completion:</strong>{" "}
            {data.completion || 0}%
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {data.status || "Going On"}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {currentDate}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {currentTime}
          </p>
        </div>
      </div>

      {/* Task Overview History */}

      <div className="dashboard-card">
        <h2>Task Overview History</h2>

        {overviewHistory.length > 0 ? (
          overviewHistory.map((item, index) => (
            <div
              key={index}
              className="overview-box"
              style={{
                marginBottom: "15px",
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <h4>Update {index + 1}</h4>

              <p>
                <strong>Task:</strong> {item.task}
              </p>

              <p>
                <strong>Overview:</strong> {item.overview}
              </p>

              <p>
                <strong>Completion:</strong>{" "}
                {item.completion}%
              </p>

              <p>
                <strong>Status:</strong> {item.status}
              </p>

              <p>
                <strong>Date:</strong> {item.date}
              </p>

              <p>
                <strong>Time:</strong> {item.time}
              </p>
            </div>
          ))
        ) : (
          <div className="overview-box">
            No task overview updated yet.
          </div>
        )}
      </div>

      {/* Progress Overview */}

      <div className="dashboard-card">
        <h2>Progress Overview</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${data.completion || 0}%`,
            }}
          ></div>
        </div>

        <p className="progress-text">
          {data.completion || 0}% Completed
        </p>
      </div>
    </div>
  );
}

export default InternDashboard;