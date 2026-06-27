import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import InternRegistration from "./components/InternRegistration";
import InternAllocation from "./components/internAllocation";
import InternDashboard from "./components/InternDashboard";
import StudentList from "./components/StudentList";
import Interns from "./components/Interns";
import StatusPage from "./components/StatusPage";
import CompletionPage from "./components/CompletionPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<InternRegistration />} />
          <Route path="/register" element={<InternRegistration />} />

          <Route
            path="/allocation"
            element={<InternAllocation />}
          />

          <Route
            path="/dashboard"
            element={<InternDashboard />}
          />

          <Route
            path="/students"
            element={<StudentList />}
          />

          <Route
            path="/interns"
            element={<Interns />}
          />

          <Route
            path="/status"
            element={<StatusPage />}
          />

          <Route
            path="/completed"
            element={<CompletionPage />}
          />

          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center" }}>
                Page Not Found
              </h2>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;