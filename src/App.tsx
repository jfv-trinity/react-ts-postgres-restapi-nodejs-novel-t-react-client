import React from "react";
import "./App.scss";
import { Button } from "./components/Buttons/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Views/Home";
import LoginPage from "./components/Views/Login";
import RegisterPage from "./components/Views/Register";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/Views/UserProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="context">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="HomePage" element={<HomePage />} />
            <Route path="LoginPage" element={<LoginPage />} />
            <Route path="RegisterPage" element={<RegisterPage />} />
            <Route path="Profile" element={<UserProfile />} />
          </Routes>
          <Button text="testing the button" type="btnPrimary" />
          <Button text="this should change" />
        </div>
      </div>
    </Router>
  );
}

export default App;
