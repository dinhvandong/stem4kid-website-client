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
import RegisterPage from "./pages/RegisterPage";
import SubjectPage from "./pages/SubjectPage";
import { Layout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/admin/course"
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />
        <Route
          path="/admin/subject"
          element={
            <Layout>
              <SubjectPage />
            </Layout>
          }
        />
        <Route
          path="/admin/student"
          element={
            <Layout>
              <StudentPage />
            </Layout>
          }
        />
        <Route
          path="/admin/class"
          element={
            <Layout>
              <ClassPage />
            </Layout>
          }
        />
        <Route
          path="/admin/teacher"
          element={
            <Layout>
              <TeacherPage />
            </Layout>
          }
        />
        <Route
          path="/admin/finance"
          element={
            <Layout>
              <FinancePage />
            </Layout>
          }
        />
        <Route
          path="/admin/account"
          element={
            <Layout>
              <AccountPage />
            </Layout>
          }
        />
        <Route
          path="/admin/center"
          element={
            <Layout>
              <CenterPage />
            </Layout>
          }
        />
        <Route
          path="/admin/register"
          element={
            <Layout>
              <RegisterPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
