import Swal from "sweetalert2";

const handleSubmit = async (
  e,
  navigate,
  formData
) => {
  e.preventDefault();

  await Swal.fire({
    icon: "success",
    title: "Application Submitted",
    text: "Internship application submitted successfully.",
    confirmButtonColor: "#1f5db8",
  });

  navigate("/allocation", {
    state: formData,
  });
};

export default handleSubmit;