import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import "./internAllocation.css";

function Allocation() {
const navigate = useNavigate();
const location = useLocation();

const student = location.state || {
fullName: "No Student Selected",
email: "",
contactNumber: "",
collegeName: "",
degree: "",
branch: "",
year: "",
};

const [domain, setDomain] = useState(
"Frontend Development"
);

const [allocated, setAllocated] = useState(false);

const handleAllocation = async () => {
const result = await Swal.fire({
icon: "success",
title: "Internship Allocated",
text: `${domain} Internship Allocated Successfully`,
confirmButtonColor: "#ff6200",
confirmButtonText: "OK",
allowOutsideClick: false,
allowEscapeKey: false,
});


if (result.isConfirmed) {
  setAllocated(true);

  navigate("/status", {
    state: {
    fullName: student.fullName,
    email: student.email,
    college_name: student.collegeName,
    branch: student.branch,
    year: student.year,
    domain: domain,
    status: "Active",
      

     
    },
  });
}


};

return ( <div className="allocation-container">


  <div className="allocation-header">
    <h1>AR Infotek Internship Portal</h1>
    <p>Intern Management and Allocation</p>
  </div>

  <div className="success-banner">
    ✅ Registration Completed Successfully
  </div>

  <div className="student-card">
    <h2>Student Information</h2>

    <div className="info-grid">

      <div className="info-item">
        <span>Name</span>
        <strong>{student.fullName}</strong>
      </div>

      <div className="info-item">
        <span>Email</span>
        <strong>{student.email}</strong>
      </div>

      <div className="info-item">
        <span>Contact Number</span>
        <strong>{student.contactNumber}</strong>
      </div>

      <div className="info-item">
        <span>College Name</span>
        <strong>{student.collegeName}</strong>
      </div>

      <div className="info-item">
        <span>Degree</span>
        <strong>{student.degree}</strong>
      </div>

      <div className="info-item">
        <span>Branch</span>
        <strong>{student.branch}</strong>
      </div>

      <div className="info-item">
        <span>Year</span>
        <strong>{student.year}</strong>
      </div>

    </div>
  </div>

  <div className="allocation-form">

    <h2>Internship Domain Allocation</h2>

    <p className="allocation-subtitle">
      Select a domain for internship assignment
    </p>

    <select
      value={domain}
      onChange={(e) =>
        setDomain(e.target.value)
      }
    >
      <option>Frontend Development</option>
      <option>Backend Development</option>
      <option>Full Stack Development</option>
      <option>Cloud Computing</option>
      <option>DevOps</option>
      <option>Data Engineering</option>
    </select>

    <button
      className="allocate-btn"
      onClick={handleAllocation}
    >
      Allocate Internship
    </button>

    {allocated && (
      <div className="success-card">

        <h3>Allocation Successful 🎉</h3>

        <p>
          <strong>Student:</strong>{" "}
          {student.fullName}
        </p>

        <p>
          <strong>Domain:</strong>{" "}
          {domain}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          Active
        </p>

      </div>
    )}

  </div>

</div>


);
}

export default Allocation;
