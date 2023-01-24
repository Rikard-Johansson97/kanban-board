import React, { createContext, useState, useContext } from "react";
import { projectsData } from "./Projects-data";

const ProjectContext = createContext({});

export function useProject() {
  return useContext(ProjectContext);
}

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState(projectsData);

  const value = {
    projects: projects,
    setProjects: setProjects,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
