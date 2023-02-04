import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Register } from "./components/Register";
import { MainPage } from "./components/MainPage";
import { Navbar } from "./components/Navbar/Navbar";
import { New } from "./components/New";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
