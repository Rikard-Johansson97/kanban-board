import React, { FC } from "react";
import { useProject } from "../../context/projectContext";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface NavbarProps {
  setShowAddTicket: any;
  setShowDropdown: any;
  showDropdown: any;
}

const Navbar: FC<NavbarProps> = ({
  setShowAddTicket,
  setShowDropdown,
  showDropdown,
}) => {
  const { currentProject }: any = useProject();

  return (
    <div className='navbar'>
      <div className='logo-container'>
        <IconLogo />
        <h1>Kanban</h1>
      </div>
      <section className='nav-heading-section'>
        <IconLogo />
        <h2>{currentProject.title}</h2>
        <button
          className='arrow-btn'
          onClick={() => {
            setShowDropdown((prev: boolean) => !prev);
          }}>
          {showDropdown ? (
            <KeyboardArrowUpIcon fontSize='large' />
          ) : (
            <KeyboardArrowDownIcon fontSize='large' />
          )}
        </button>
      </section>
      <section className='nav-btn-section'>
        <button
          onClick={() => {
            setShowAddTicket((prev: boolean) => !prev);
          }}>
          Add New Task
        </button>
      </section>
    </div>
  );
};

export default Navbar;
