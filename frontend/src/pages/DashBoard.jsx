import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

const DashBoard = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const Uname = window.localStorage.getItem("userName");
    const Uemail = window.localStorage.getItem("userEmail");

    if (!Uname) {
      navigate("/home");
    }

    setUserName(Uname);
    setUserEmail(Uemail);
  }, []);

  const logout = () => {
    window.localStorage.clear();
    navigate("/home");
  };

  return (
    <div className="dashboard-container">


      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav>
          <Link to="adminhome"> Dashboard</Link>
          <Link to="adminabout">About</Link>
        </nav>
      </aside>

      
      <div className="main-content">

       
        <header className="topbar">
          <div>
            <strong>{userName}</strong>
            <span>{userEmail}</span>
          </div>

          <Button variant="danger" size="sm" onClick={logout}>
            Logout
          </Button>
        </header>

        
        <div className="content-area">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashBoard;
