import React, { FC } from "react";
import "./SideNav.scss";
import { useProject } from "../../context/projectContext";
import Links from "../Links/Links";

interface SideNavProps {}

const SideNav: FC<SideNavProps> = ({}) => {
  const { projects } = useProject();
  return (
    <div className='sidenav'>
      <p>ALL BOARDS ( {projects.length} )</p>
      <Links />
    </div>
  );
};

export default SideNav;
