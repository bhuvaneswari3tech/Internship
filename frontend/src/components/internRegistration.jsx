
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import handleSubmit from "../handlers/handleSubmit";
import logo from "../assets/arinfotek_logo.png";
import "./InternRegistration.css";

function InternRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
     contactNumber: "",
  collegeName: "",
  degree:"",
  branch: "",
  year: "",
  });

  return (
    <div className="page">

      <div className="portal-header">
        <img
          src={logo}
          alt="AR Infotek Logo"
          className="portal-logo"
        />

        <div className="portal-title">
          <h1>AR Infotek Internship Portal</h1>
        </div>
      </div>

      <div className="form-section">

        <form
          className="intern-form"
          onSubmit={(e) =>
            handleSubmit(
              e,
              navigate,
              formData
            )
          }
        >

          <div className="row">
            <div className="form-group">
              <label>Full Name *</label>

              <input
                type="text"
                placeholder="Use only letters and spaces"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Date of Birth *</label>

              <input
                type="date"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Gender *</label>

            <select required>
              <option value="">
                Choose your gender
              </option>

              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="row">

            <div className="form-group">
              <label>Contact Number *</label>

              
              <input
  type="text"
  placeholder="10 digit mobile number"
  value={formData.contactNumber}
  onChange={(e) =>
    setFormData({
      ...formData,
      contactNumber: e.target.value,
    })
  }
  required
/>
            </div>

            <div className="form-group">
              <label>Alternate Number</label>

              <input
                type="text"
                placeholder="10 digit mobile number"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Home Address *</label>

            <textarea
              rows="4"
              placeholder="Enter your full home address"
              required
            />
          </div>

          <div className="form-group">
            <label>College Name *</label>

           <input
  type="text"
  placeholder="Enter your college name"
  value={formData.collegeName}
  onChange={(e) =>
    setFormData({
      ...formData,
      collegeName: e.target.value,
    })
  }
  required
/>
</div>

          

          <div className="form-group">
  <label>Degree *</label>

  <select
    value={formData.degree}
    onChange={(e) =>
      setFormData({
        ...formData,
        degree: e.target.value,
      })
    }
    required
  >
    <option value="">
      Select your degree
    </option>

    <option>B.E</option>
    <option>B.Tech</option>
    <option>BCA</option>
    <option>BSc</option>
    <option>MCA</option>
    <option>M.Tech</option>
  </select>
</div>
          <div className="form-group">
  <label>Branch *</label>

  <select
    value={formData.branch}
    onChange={(e) =>
      setFormData({
        ...formData,
        branch: e.target.value,
      })
    }
    required
  >
    <option value="">
      Select your branch
    </option>

    <option>Computer Science</option>
    <option>Information Technology</option>
    <option>Electronics</option>
    <option>Mechanical</option>
    <option>Civil</option>
  </select>
</div>

          <div className="row">

           <div className="form-group">
  <label>Year *</label>

  <select
    value={formData.year}
    onChange={(e) =>
      setFormData({
        ...formData,
        year: e.target.value,
      })
    }
    required
  >
    <option value="">
      Select Year
    </option>

    <option>1st Year</option>
    <option>2nd Year</option>
    <option>3rd Year</option>
    <option>4th Year</option>
  </select>
</div>

            <div className="form-group">
              <label>Semester *</label>

              <select required>
                <option value="">
                  Select Semester
                </option>

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

          <div className="form-group">
            <label>
              Student Registration ID *
            </label>

            <input
              type="text"
              placeholder="As given in college ID card"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Internship Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default InternRegistration;

