"use client";
import { ReactNode, createContext, useContext, useState } from "react";

type ProjectContextProps = {
  isOpenProject: boolean;
  setIsOpenProject: React.Dispatch<React.SetStateAction<boolean>>;
  projectIdx: number;
  setProjectIdx: React.Dispatch<React.SetStateAction<number>>;
};

export const ProjectContext = createContext({} as ProjectContextProps);

export const useProjectContext = () => useContext(ProjectContext);

export const ProjectContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpenProject, setIsOpenProject] = useState(false);
  const [projectIdx, setProjectIdx] = useState<number>(0);

  return (
    <ProjectContext.Provider
      value={{
        isOpenProject,
        setIsOpenProject,
        projectIdx,
        setProjectIdx,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
