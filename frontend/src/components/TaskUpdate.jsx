const handleSave = async () => {
  if (!task?.title) {
    alert("Please select a task.");
    return;
  }

  if (!workDone.trim()) {
    alert("Please enter the work overview.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:5001/api/update-task",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          intern_id: intern.intern_id,
          task: task.title,
          overview: workDone,
          completion: Number(progress),
          status: status,
          remarks: remarks,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Update Failed");
    }

    alert("Task Updated Successfully");

    navigate("/dashboard", {
      state: {
        email: intern.email,
      },
    });

  } catch (err) {
    console.error("Task Update Error:", err);
    alert(err.message || "Server Error");
  }
};