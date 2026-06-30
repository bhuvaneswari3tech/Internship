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
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* Registration */}
          <Route
            path="/"
            element={<InternRegistration />}
          />

          <Route
            path="/register"
            element={<InternRegistration />}
          />

          {/* Allocation */}
          <Route
            path="/allocation"
            element={<InternAllocation />}
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<InternDashboard />}
          />

          {/* Student List */}
          <Route
            path="/students"
            element={<StudentList />}
          />

          {/* Intern List */}
          <Route
            path="/interns"
            element={<Interns />}
          />

          {/* Status Page */}
          <Route
            path="/status"
            element={<StatusPage />}
          />

          {/* Update Student */}
          <Route
            path="/update"
            element={<UpdateStudent />}
          />

          {/* Completion Page */}
          <Route
            path="/completed"
            element={<CompletionPage />}
          />

          {/* Page Not Found */}
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