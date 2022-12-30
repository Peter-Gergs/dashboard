import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/settings/Settings";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Courses from "./components/courses/Courses";
import Friends from "./components/friends/Friends";
import Files from "./components/files/Files";
import Plans from "./components/plans/Plans";

function App() {
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <Header />
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="courses" element={<Courses />} />
          <Route path="friends" element={<Friends />} />
          <Route path="files" element={<Files />} />
          <Route path="plans" element={<Plans />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
