

import { Route, Routes } from "react-router-dom";

import DashboardAdmin  from "./components/dashboard/admin/DashboardAdmin";
// import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Home />
          </>
        }
      />

      <Route path="/login" element={<Login />} />
      {/* <Route path="/dashboard" element={<UserDash />} /> */}
      <Route path="/admin/dashboard" element={<DashboardAdmin />} />
     
    </Routes>
  );
}

export default App;
