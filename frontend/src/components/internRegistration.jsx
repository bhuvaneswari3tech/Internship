import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import { useState } from "react";
import handleSubmit from "../handlers/handleSubmit";
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
import logo from "../assets/arinfotek_logo.png";
import "./InternRegistration.css";

function InternRegistration() {
  const navigate = useNavigate();

<<<<<<< HEAD
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/allocation", {
      state: {
        fullName,
        email,
        contactNumber,
        collegeName,
        branch,
        year,
      },
    });
  };
=======
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
     contactNumber: "",
  collegeName: "",
  degree:"",
  branch: "",
  year: "",
  });
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c

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
<<<<<<< HEAD
          onSubmit={handleSubmit}
=======
          onSubmit={(e) =>
            handleSubmit(
              e,
              navigate,
              formData
            )
          }
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
        >

          <div className="row">
            <div className="form-group">
              <label>Full Name *</label>

              <input
                type="text"
                placeholder="Use only letters and spaces"
<<<<<<< HEAD
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
=======
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
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

<<<<<<< HEAD
              <input
                type="text"
                placeholder="10 digit mobile number"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(e.target.value)
                }
                required
              />
=======
              
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
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
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

<<<<<<< HEAD
            <input
              type="text"
              placeholder="Enter your college name"
              value={collegeName}
              onChange={(e) =>
                setCollegeName(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Degree *</label>

            <select required>
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
=======
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
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c

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
<<<<<<< HEAD
            <label>Branch *</label>

            <select
              value={branch}
              onChange={(e) =>
                setBranch(e.target.value)
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
                value={year}
                onChange={(e) =>
                  setYear(e.target.value)
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
=======
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
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c

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
<<<<<<< HEAD
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
=======
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
>>>>>>> 98c3e104759276d1d62de871bde4bac723a8958c
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