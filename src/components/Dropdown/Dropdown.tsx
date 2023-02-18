import React, { FC } from "react";
import "./Dropdown.scss";
import { useProject } from "../../context/projectContext";
import CloseIcon from "@mui/icons-material/Close";
import Links from "../Links/Links";

interface DropdownProps {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FC<DropdownProps> = ({ setShowDropdown }) => {
  const { projects } = useProject();

  return (
    <aside className={`dropdown`}>
      <div className='dropdown-card'>
        <button
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
          className='close-dropdown-btn'>
          <CloseIcon fontSize='large' />
        </button>
        <p>ALL BOARDS ( {projects.length} )</p>

        <Links />
      </div>
    </aside>
  );
};

export default Dropdown;
