import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import Home from "./components/Home";
import PersonalDetails from "./components/personalInfo/PersonalDetails";
import WorkInformation from "./components/WorkForm";
import HrSettingsForm from "./components/HrSettings";

function App() {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workInformation" element={<WorkInformation />} />
          <Route path="/hrSetting" element={<HrSettingsForm />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personaldetails" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
