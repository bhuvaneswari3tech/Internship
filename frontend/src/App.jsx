import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import InternRegistration from "./components/InternRegistration";
import InternAllocation from "./components/internAllocation";
import InternDashboard from "./components/InternDashboard";
import StudentList from "./components/StudentList";
import StatusPage from "./components/StatusPage";
import CompletionPage from "./components/CompletionPage";
import TaskUpdate from "./components/TaskUpdate";

function App() {
  return (
    <BrowserRouter>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="min-h-screen">
        <Routes>

          <Route
            path="/"
            element={<InternRegistration />}
          />

          {/* Register page */}
          <Route
            path="/"
            element={<InternRegistration />}
          />

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
            path="/status"
            element={<StatusPage />}
          />

          <Route
            path="/completed"
            element={<CompletionPage />}
          />
          <Route
  path="/task-update"
  element={<TaskUpdate />}
/>

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;