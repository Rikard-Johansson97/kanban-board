import React, { useState } from "react";
import { useProject } from "../../context/projectContext";
import "./SideNav.scss";

import { Ticket, Board, Project } from "../../types/types";

interface Props {
  Projects: Project;
}

const SideNav = () => {
  const { projects, currentProject, changeBoard }: any = useProject();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentProject);

  return (
    <div className='sidenav'>
      <p>ALL BOARDS ({projects.length})</p>
      <ul>
        {projects.map((project: Project, i: number) => (
          <li
            key={project.id}
            onClick={() => changeBoard(i)}
            className={currentProject.id === project.id ? "active" : undefined}>
            {project.title}
          </li>
        ))}
        <li
          className='create-board'
          onClick={() => setIsOpen((currentValue) => !currentValue)}>
          Create new board
        </li>
      </ul>
      {isOpen && (
        <div className='create-project'>
          <input type='text'></input>
          <button>Create Project</button>
        </div>
      )}
    </div>
  );
};

export default SideNav;
