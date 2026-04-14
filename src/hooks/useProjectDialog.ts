import { useProjectContext } from "@/context/ProjectContext";
import { useEffect, useRef, useState } from "react";

export const useProjectDialog = () => {
  const { setIsOpenProject, setProjectIdx, isOpenProject } =
    useProjectContext();
  const [canOpen, setCanOpen] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpenProject) {
      setCanOpen(false);
      timeoutRef.current = setTimeout(() => setCanOpen(true), 1500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpenProject]);

  const openProjectDialog = (idx: number) => {
    if (!canOpen) return;
    setProjectIdx(idx);
    setIsOpenProject(true);
  };

  return { openProjectDialog };
};
