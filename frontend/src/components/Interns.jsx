import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./studentList.css";

function Interns() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInterns();
  }, []);

  const fetchInterns = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/interns");

      if (!response.ok) {
        throw new Error("Failed to fetch interns");
      }

      const result = await response.json();

      console.log("Backend Response:", result);

      // Your backend returns:
      // {
      //   success: true,
      //   count: 5,
      //   data: [...]
      // }

      if (result.success) {
        setStudents(result.data);
      } else {
        setStudents([]);
      }
    } catch (error) {
      console.error("Error fetching interns:", error);
      alert("Unable to load intern data.");
    } finally {
      setLoading(false);
    }
  };

  const openAllocation = (student) => {
    navigate("/allocation", {
      state: student,
    });
  };

  return (
    <div className="student-page">
      <div className="top-banner">
        <h1>AR Infotek Internship Portal</h1>
        <p>Intern Details</p>
      </div>

      <div className="summary-card">
        <h2>Total Interns</h2>
        <span>{students.length}</span>
      </div>

      <div className="table-card">
        {loading ? (
          <h3 style={{ textAlign: "center" }}>Loading...</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>College</th>
                <th>Degree</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Allocation</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.intern_id}>
                    <td>{student.intern_id}</td>
                    <td>{student.full_name}</td>
                    <td>{student.email}</td>
                    <td>{student.college_name}</td>
                    <td>{student.degree}</td>
                    <td>{student.branch}</td>

                    <td>
                      <span className="status">
                        {student.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="view-btn"
                        onClick={() => openAllocation(student)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    No interns found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Interns;