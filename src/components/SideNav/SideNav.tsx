import React from "react";
import { useProject } from "../../context/projectContext";
import "./SideNav.scss";

import { Ticket, Board, Project } from "../../types/types";

interface Props {
  Projects: Project;
}

const SideNav = () => {
  const { projects, currentProject, changeBoard }: any = useProject();

  console.log(projects);

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
      </ul>
    </div>
  );
};

export default SideNav;
