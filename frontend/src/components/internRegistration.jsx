import { useNavigate } from "react-router-dom";
import { useState } from "react";
import handleSubmit from "../handlers/handleSubmit";
import logo from "../assets/arinfotek_logo.png";
import "./internRegistration.css";

function InternRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    alternateNumber: "",
    address: "",
    collegeName: "",
    degree: "",
    branch: "",
    year: "",
    semester: "",
    registrationId: "",
    email: "",
  });

  return (
    <div className="page">

      {/* HEADER */}
      <div className="portal-header">
        <img
          src={logo}
          alt="AR Infotek Logo"
          className="portal-logo"
          style={{
            width: "120px",
            height: "auto",
            objectFit: "contain",
          }}
        />

        <div className="portal-title">
          <h1>AR Infotek Internship Portal</h1>
        </div>
      </div>

      {/* FORM */}
      <div className="form-section">
        <form
          className="intern-form"
          onSubmit={(e) => handleSubmit(e, navigate, formData)}
        >

          {/* NAME + DOB */}
          <div className="row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="Use only letters and spaces"
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* GENDER */}
          <div className="form-group">
            <label>Gender *</label>
            <select
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              required
            >
              <option value="">Choose your gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* CONTACT */}
          <div className="row">
            <div className="form-group">
              <label>Contact Number *</label>
              <input
                type="text"
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
                placeholder="10 digit mobile number"
                required
              />
            </div>

            <div className="form-group">
              <label>Alternate Number</label>
              <input
                type="text"
                value={formData.alternateNumber}
                onChange={(e) =>
                  setFormData({ ...formData, alternateNumber: e.target.value })
                }
                placeholder="10 digit mobile number"
              />
            </div>
          </div>

          {/* ADDRESS */}
          <div className="form-group">
            <label>Home Address *</label>
            <textarea
              rows="4"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              placeholder="Enter your full home address"
              required
            />
          </div>

          {/* COLLEGE */}
          <div className="form-group">
            <label>College Name *</label>
            <input
              type="text"
              value={formData.collegeName}
              onChange={(e) =>
                setFormData({ ...formData, collegeName: e.target.value })
              }
              required
            />
          </div>

          {/* DEGREE */}
          <div className="form-group">
            <label>Degree *</label>
            <select
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
              required
            >
              <option value="">Select your degree</option>
              <option>B.E</option>
              <option>B.Tech</option>
              <option>BCA</option>
              <option>BSc</option>
              <option>MCA</option>
              <option>M.Tech</option>
            </select>
          </div>

          {/* BRANCH */}
          <div className="form-group">
            <label>Branch *</label>
            <select
              value={formData.branch}
              onChange={(e) =>
                setFormData({ ...formData, branch: e.target.value })
              }
              required
            >
              <option value="">Select your branch</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>

          {/* YEAR + SEMESTER */}
          <div className="row">
            <div className="form-group">
              <label>Year *</label>
              <select
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                required
              >
                <option value="">Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Semester *</label>
              <select
                value={formData.semester}
                onChange={(e) =>
                  setFormData({ ...formData, semester: e.target.value })
                }
                required
              >
                <option value="">Select Semester</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>

          {/* REG ID */}
          <div className="form-group">
            <label>Student Registration ID *</label>
            <input
              type="text"
              value={formData.registrationId}
              onChange={(e) =>
                setFormData({ ...formData, registrationId: e.target.value })
              }
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          {/* SUBMIT */}
          <button type="submit" className="submit-btn">
            Submit Internship Application
          </button>

        </form>
      </div>
    </div>
  );
}

export default InternRegistration;