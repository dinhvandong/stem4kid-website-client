import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import StudentPage from "./pages/StudentPage";
import ClassPage from "./pages/ClassPage";
import TeacherPage from "./pages/TeacherPage";
import FinancePage from "./pages/FinancePage";
import AccountPage from "./pages/AccountPage";
import CenterPage from "./pages/CenterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/course" element={<AdminPage />} />
        <Route path="/admin/student" element={<StudentPage />} />
        <Route path="/admin/class" element={<ClassPage />} />
        <Route path="/admin/teacher" element={<TeacherPage />} />
        <Route path="/admin/finance" element={<FinancePage />} />
        <Route path="/admin/account" element={<AccountPage />} />
        <Route path="/admin/center" element={<CenterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
