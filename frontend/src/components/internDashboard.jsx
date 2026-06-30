import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./internDashboard.css";

function InternDashboard() {
  const location = useLocation();
  const email = location.state?.email;

  const [intern, setIntern] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) {
      console.log("No email received");
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      try {
        console.log("Fetching dashboard for:", email);

        const response = await fetch(
          `http://localhost:5001/api/intern/${encodeURIComponent(email)}`
        );

        const result = await response.json();

        console.log("Dashboard Response:", result);

        if (response.ok && result.success) {
          setIntern(result.data);

          if (Array.isArray(result.history)) {
            setHistory(result.history);
          } else {
            setHistory([]);
          }
        } else {
          setIntern(null);
        }
      } catch (err) {
        console.error(err);
        setIntern(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [email]);

  if (loading) {
    return (
      <div className="dashboard-container">
        <h2 style={{ textAlign: "center" }}>Loading...</h2>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="dashboard-container">
        <h2 style={{ textAlign: "center" }}>
          Email not received.
        </h2>
      </div>
    );
  }

  if (!intern) {
    return (
      <div className="dashboard-container">
        <h2 style={{ textAlign: "center" }}>
          No Intern Found
        </h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Intern Dashboard</p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Completion</h3>
          <span>{intern.completion ?? 0}%</span>
        </div>

        <div className="stat-card">
          <h3>Status</h3>
          <span>{intern.status}</span>
        </div>

        <div className="stat-card">
          <h3>Domain</h3>
          <span>{intern.domain}</span>
        </div>

      </div>

      <div className="dashboard-card">

        <h2>Student Information</h2>

        <div className="details-grid">

          <p><strong>Name :</strong> {intern.full_name}</p>

          <p><strong>Email :</strong> {intern.email}</p>

          <p><strong>College :</strong> {intern.college_name}</p>

          <p><strong>Degree :</strong> {intern.degree}</p>

          <p><strong>Branch :</strong> {intern.branch}</p>

          <p><strong>Year :</strong> {intern.year}</p>

          <p><strong>Domain :</strong> {intern.domain}</p>

        </div>

      </div>

      <div className="dashboard-card">

        <h2>Internship Details</h2>

        <div className="details-grid">

          <p><strong>Task :</strong> {intern.task || "No Task Assigned"}</p>

          <p><strong>Completion :</strong> {intern.completion ?? 0}%</p>

          <p><strong>Status :</strong> {intern.status}</p>

          <p><strong>Date :</strong> {new Date().toLocaleDateString()}</p>

          <p><strong>Time :</strong> {new Date().toLocaleTimeString()}</p>

        </div>

      </div>

      <div className="dashboard-card">

        <h2>Task Overview History</h2>

        {history.length === 0 ? (
          <div className="overview-box">
            No task history available.
          </div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="overview-box">

              <h3>Update {index + 1}</h3>

              <p><strong>Task :</strong> {item.task}</p>

              <p><strong>Overview :</strong> {item.overview}</p>

              <p><strong>Completion :</strong> {item.completion}%</p>

              <p><strong>Status :</strong> {item.status}</p>

              <p>
                <strong>Date :</strong>{" "}
                {new Date(item.updated_at).toLocaleDateString()}
              </p>

              <p>
                <strong>Time :</strong>{" "}
                {new Date(item.updated_at).toLocaleTimeString()}
              </p>

            </div>
          ))
        )}

      </div>

      <div className="dashboard-card">

        <h2>Progress</h2>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${intern.completion ?? 0}%`,
            }}
          ></div>

        </div>

        <p>{intern.completion ?? 0}% Completed</p>

      </div>

    </div>
  );
}

export default InternDashboard;