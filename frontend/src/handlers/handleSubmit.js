import Swal from "sweetalert2";

const handleSubmit = async (e, navigate, formData) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/interns/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        contact_number: formData.contactNumber,
        college_name: formData.collegeName,
        degree: formData.degree,
        branch: formData.branch,
        year: formData.year,
        status: "Pending",
      }),
    });

    // ✅ safely parse JSON (prevents crash if backend returns empty/HTML error)
    let data;
    try {
      data = await response.json();
    } catch {
      data = { message: "Invalid server response" };
    }

    if (response.ok) {
      await Swal.fire({
        icon: "success",
        title: "Application Submitted",
        text: data?.message || "Success",
        confirmButtonColor: "#1f5db8",
      });

      // ✅ safe navigation only if data exists
      navigate("/allocation", {
        state: {
          intern_id: data?.data?.intern_id,
          fullName: data?.data?.full_name,
          email: data?.data?.email,
          contactNumber: data?.data?.contact_number,
          collegeName: data?.data?.college_name,
          degree: data?.data?.degree,
          branch: data?.data?.branch,
          year: data?.data?.year,
          status: data?.data?.status,
        },
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: data?.message || "Something went wrong",
      });
    }

  } catch (error) {
    console.error("Submit Error:", error);

    Swal.fire({
      icon: "error",
      title: "Server Error",
      text: "Backend not reachable. Check server (port 5001).",
    });
  }
};

export default handleSubmit;