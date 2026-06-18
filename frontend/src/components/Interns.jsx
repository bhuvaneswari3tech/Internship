import { useNavigate } from "react-router-dom";
import "./studentList.css";

function Interns() {
  const navigate = useNavigate();

  const students = [
    {
      intern_id: 1,
      full_name: "Bhuvaneswari",
      email: "bhuvaneswari@gmail.com",
      college_name: "Adhiyamaan College",
      degree: "B.E",
      branch: "CSE",
      status: "Active",
    },
    {
      intern_id: 2,
      full_name: "Priya",
      email: "priya@gmail.com",
      college_name: "Anna University",
      degree: "B.Tech",
      branch: "IT",
      status: "Active",
    },
    {
      intern_id: 3,
      full_name: "Karthik",
      email: "karthik@gmail.com",
      college_name: "PSG College",
      degree: "B.E",
      branch: "CSE",
      status: "Completed",
    },
    {
      intern_id: 4,
      full_name: "Arun",
      email: "arun@gmail.com",
      college_name: "Thiagarajar College",
      degree: "B.E",
      branch: "ECE",
      status: "Active",
    },
    {
      intern_id: 5,
      full_name: "Divya",
      email: "divya@gmail.com",
      college_name: "Madurai Kamaraj University",
      degree: "B.Tech",
      branch: "IT",
      status: "Pending",
    },
  ];

  const openDashboard = (student) => {
    navigate("/dashboard", {
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
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.intern_id}>
                <td>{student.intern_id}</td>
                <td>{student.full_name}</td>
                <td>{student.email}</td>
                <td>{student.college_name}</td>
                <td>{student.degree}</td>
                <td>{student.branch}</td>
                <td>
                  <button
                    className="status"
                    onClick={() => openDashboard(student)}
                  >
                    {student.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Interns;