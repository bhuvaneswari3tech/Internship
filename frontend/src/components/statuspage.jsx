import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./statuspage.css";

function StatusPage() {
  const navigate = useNavigate();

  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/interns"
      );

      const result = await response.json();

      if (result.success) {
        setInterns(result.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const completedTasks = interns.filter(
    (intern) => (intern.completion || 0) === 100
  ).length;

  const overallProgress =
    interns.length > 0
      ? Math.round(
          interns.reduce(
            (sum, intern) => sum + (intern.completion || 0),
            0
          ) / interns.length
        )
      : 0;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="status-container">

      <div className="status-header">
        <h1>AR Infotek Internship Portal</h1>
        <p>Work Status & Performance Tracking</p>
      </div>

      <div className="overview-card">

        <div className="overview-item">
          <h3>Total Interns</h3>
          <span>{interns.length}</span>
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

        <h2>Intern Status</h2>

        <table className="status-table">

          <thead>
            <tr>
              <th>Task</th>
              <th>Intern</th>
              <th>Status</th>
              <th>Completion</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>

            {interns.length > 0 ? (
              interns.map((intern) => (
                <tr key={intern.intern_id}>

                  <td>{intern.task || "No Task"}</td>

                  <td>

                    <button
                      className="intern-btn"
                      onClick={() =>
                        navigate("/dashboard", {
                          state: {
                            email: intern.email,
                          },
                        })
                      }
                    >
                      {intern.full_name}
                    </button>

                  </td>

                  <td>{intern.status}</td>

                  <td>{intern.completion || 0}%</td>

                  <td>

                    <button
                      className="update-btn"
                      onClick={() =>
                        navigate("/update", {
                          state: intern,
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
                <td colSpan="5">No Interns Found</td>
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