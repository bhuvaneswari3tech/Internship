import "./CompletionPage.css";

function CompletionPage() {
  return (
    <div className="completion-container">
      <h1>🎉 Internship Completed Successfully!</h1>

      <p>
        Congratulations! You have successfully completed your internship.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="home-btn"
      >
        Go to Home
      </button>
    </div>
  );
}

export default CompletionPage;