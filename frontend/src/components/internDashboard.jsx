import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./internDashboard.css";

function InternDashboard() {
  const location = useLocation();
  const email = location.state?.email;

  const [intern, setIntern] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) {
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/intern/${encodeURIComponent(email)}`
        );

        const result = await response.json();

        console.log("Dashboard Response:", result);

        if (response.ok && result.success) {
          setIntern(result.data || {});
          setHistory(result.history || []);
        } else {
          setIntern({});
          setHistory([]);
        }
      } catch (err) {
        console.error(err);
        setIntern({});
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [email]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="dashboard-container">
        <h2>Email not received.</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Intern Dashboard</p>
      </div>

      {/* Statistics */}

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Completion</h3>
          <span>{intern?.completion ?? 0}%</span>
        </div>

        <div className="stat-card">
          <h3>Status</h3>
          <span>{intern?.status ?? "Pending"}</span>
        </div>

        <div className="stat-card">
          <h3>Domain</h3>
          <span>{intern?.domain ?? "Not Assigned"}</span>
        </div>

      </div>

      {/* Student Information */}

      <div className="dashboard-card">

        <h2>Student Information</h2>

        <div className="details-grid">

          <p><strong>Name :</strong> {intern?.full_name}</p>

          <p><strong>Email :</strong> {intern?.email}</p>

          <p><strong>Contact :</strong> {intern?.contact_number}</p>

          <p><strong>College :</strong> {intern?.college_name}</p>

          <p><strong>Degree :</strong> {intern?.degree}</p>

          <p><strong>Branch :</strong> {intern?.branch}</p>

          <p><strong>Year :</strong> {intern?.year}</p>

          <p><strong>Domain :</strong> {intern?.domain ?? "Not Assigned"}</p>

        </div>

      </div>

      {/* Internship Details */}

      <div className="dashboard-card">

        <h2>Internship Details</h2>

        <div className="details-grid">

          <p><strong>Task :</strong> {intern?.task ?? "No Task Assigned"}</p>

          <p><strong>Completion :</strong> {intern?.completion ?? 0}%</p>

          <p><strong>Status :</strong> {intern?.status ?? "Pending"}</p>

          <p>
            <strong>Date :</strong>{" "}
            {intern?.task_date
              ? new Date(intern.task_date).toLocaleDateString()
              : "N/A"}
          </p>

          <p>
            <strong>Time :</strong>{" "}
            {intern?.task_time ?? "N/A"}
          </p>

        </div>

      </div>

      {/* Task History */}

      <div className="dashboard-card">

        <h2>Task Overview History</h2>

        {history.length === 0 ? (

          <p>No task history available.</p>

        ) : (

          history.map((item) => (

            <div key={item.history_id} className="overview-box">

              <h3>Task Update</h3>

              <p><strong>Task :</strong> {item.task}</p>

              <p><strong>Overview :</strong> {item.overview}</p>

              <p><strong>Completion :</strong> {item.completion}%</p>

              <p><strong>Status :</strong> {item.status}</p>

              <p>
                <strong>Date :</strong>{" "}
                {item.task_date
                  ? new Date(item.task_date).toLocaleDateString()
                  : item.updated_at
                  ? new Date(item.updated_at).toLocaleDateString()
                  : "N/A"}
              </p>

              <p>
                <strong>Time :</strong>{" "}
                {item.task_time
                  ? item.task_time
                  : item.updated_at
                  ? new Date(item.updated_at).toLocaleTimeString()
                  : "N/A"}
              </p>

            </div>

          ))

        )}

      </div>

      {/* Progress */}

      <div className="dashboard-card">

        <h2>Progress</h2>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${intern?.completion ?? 0}%`,
            }}
          ></div>

        </div>

        <p>{intern?.completion ?? 0}% Completed</p>

      </div>

    </div>
  );
}

export default InternDashboard;