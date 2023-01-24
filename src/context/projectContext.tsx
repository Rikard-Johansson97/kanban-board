import React, { createContext, useState, useContext } from "react";
import { projectsData } from "./Projects-data";

const ProjectContext = createContext({});

export function useProject() {
  return useContext(ProjectContext);
}

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState(projectsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const changeBoard = (index: number) => {
    setCurrentIndex(index);
  };

  const value = {
    changeBoard: changeBoard,
    currentProject: currentProject,
    projects: projects,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
