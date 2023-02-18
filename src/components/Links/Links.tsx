import React, { FC, useState } from "react";
import { useProject } from "../../context/projectContext";
import CreateProject from "../CreateProject/CreateProject";
import BoardIcon from "../../assets/icon/IconBoard";
import { Project } from "../../types/types";

interface LinksProps {}

const Links: FC<LinksProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { projects, currentProject, changeBoard } = useProject();

  return (
    <nav className='nav'>
      <ul>
        {projects?.map((link: Project, idx: number) => {
          return (
            <li
              onClick={() => changeBoard(idx)}
              key={idx}
              className={currentProject.title == link.title ? "active" : ""}>
              <BoardIcon fill='#828FA3' />
              {link.title}
            </li>
          );
        })}
        <li onClick={() => setIsOpen((prev) => !prev)} className='new-board'>
          <BoardIcon fill={"#645ccb"} />+ Create New Board
        </li>
      </ul>
      {isOpen && <CreateProject setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Links;
