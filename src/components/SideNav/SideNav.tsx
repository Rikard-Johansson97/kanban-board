import React from "react";
import { useProject } from "../../context/projectContext";
import "./SideNav.scss";

import { Ticket, Board, Project } from "../../types/types";

interface Props {
  Projects: Project;
}

const SideNav = () => {
  const { projects }: any = useProject();

  console.log(JSON.stringify(projects));

  return (
    <div className='sidenav'>
      <p>ALL BOARDS (2)</p>

      <ul>
        {projects.map((project: Project) => {
          <li>{project.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default SideNav;
