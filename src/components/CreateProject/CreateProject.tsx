import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useProject } from "../../context/projectContext";
import "./CreateProject.scss";

interface CreateProjectProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const CreateProject: FC<CreateProjectProps> = ({ setIsOpen }) => {
  const { addNewProject } = useProject();
  const [value, setValue] = useState("");

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    addNewProject(value);
  };

  return (
    <div className='create-project-modal'>
      <input onChange={(e) => setValue(e.target.value)} type='text' />
      <button onClick={handleClick}>Save</button>
    </div>
  );
};
export default CreateProject;
