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

      <main className="min-h-screen">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<InternRegistration />}
          />

          {/* Register */}
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

          {/* Students */}
          <Route
            path="/students"
            element={<StudentList />}
          />

          {/* Interns */}
          <Route
            path="/interns"
            element={<Interns />}
          />

          {/* Status */}
          <Route
            path="/status"
            element={<StatusPage />}
          />

          {/* Update Student */}
          <Route
            path="/update"
            element={<UpdateStudent />}
          />

          {/* Completed */}
          <Route
            path="/completed"
            element={<CompletionPage />}
          />

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;