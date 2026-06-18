import { useLocation } from "react-router-dom";
import "./internDashboard.css";
import internData from "../data/internData";


function InternDashboard() {
  const location = useLocation();

  const selectedIntern = location.state;

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

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Assigned Tasks</h3>
          <span>{tasksAssigned}</span>
        </div>

        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <span>{tasksCompleted}</span>
        </div>

        <div className="stat-card">
          <h3>Progress</h3>
          <span>{percentage}%</span>
        </div>

      </div>

      <div className="dashboard-card">
        <h2>Intern Information</h2>

        <div className="details-grid">

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
      </div>

      <div className="dashboard-card">
        <h2>Progress Overview</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>

        <p className="progress-text">
          {percentage}% Completed
        </p>
      </div>

    </div>
  );
}

export default InternDashboard;