import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./assets/pages/TasksPage";
import { TaskFormPage } from "./assets/pages/TaskFormPage";
import { Navigation } from "./assets/components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
