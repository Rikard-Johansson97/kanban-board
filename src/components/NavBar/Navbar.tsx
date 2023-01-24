import React from "react";
import { useProject } from "../../context/projectContext";
import "./Navbar.scss";

const Navbar = () => {
  const { currentProject }: any = useProject();
  return (
    <nav className='navbar'>
      <div className='navbar-logo-container'>
        <h1>Kanban</h1>
      </div>
      <div className='navbar-heading'>
        <h2>{currentProject.title}</h2>
      </div>
      <button>Add New Task</button>
    </nav>
  );
};

export default Navbar;
