import React, { useState, useContext, ReactNode } from "react";
import { createContext } from "react";
import {
  BoardType,
  Context,
  Project,
  ProjectContextValue,
  Projects,
  Ticket,
} from "../types/types";
import { projectsData } from "./Projects-data";

const ProjectContext = createContext<ProjectContextValue>(
  {} as ProjectContextValue
);

export function useProject() {
  return useContext(ProjectContext);
}

const ProjectContextProvider = ({ children }: React.PropsWithChildren) => {
  const [projects, setProjects] = useState<Project[]>(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const addTicket = (ticket: Ticket) => {
    projects[currentIndex].board.stage1.items.push(ticket);
    // make sure we rerender
    setProjects([...projects]);
  };

  const changeBoard = (index: number) => {
    setCurrentIndex(index);
  };

  const addNewProject = (title: string) => {
    if (!title) return;

    const data = {
      title: title,
      id: projects.length + 1,
      board: {
        stage1: {
          name: "Todo",
          items: [],
        },
        stage2: {
          name: "Doing",
          items: [],
        },
        stage3: {
          name: "Done",
          items: [],
        },
      },
    };
    setProjects((prev) => [...prev, data]);
    setCurrentIndex(projects.length);
  };

  const changeCurrentBoard = (newData: BoardType) => {
    projects[currentIndex].board = newData;
    setProjects([...projects]);
  };

  const value = {
    changeBoard,
    currentProject,
    changeCurrentBoard,
    projects,
    addTicket,
    addNewProject,
  };

  return (
    <ProjectContext.Provider value={value as any}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
