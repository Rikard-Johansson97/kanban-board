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

  function addNewProject(title: any) {
    if (!title) return;

    const newProject = {
      title: title,
      id: projects.length + 1,
      board: [
        {
          name: "Todo",
          ticket: [],
        },
        {
          name: "Doing",
          ticket: [],
        },
        {
          name: "Done",
          ticket: [],
        },
      ],
    };

    setProjects([...projectsData]);
  }

  const value = {
    changeBoard: changeBoard,
    currentProject: currentProject,
    projects: projects,
    addNewProject: addNewProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export default ProjectProvider;
