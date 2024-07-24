import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useCallback, useEffect, useRef } from "react";

const Project = () => {
  const { registerSection } = useSection();

  const projectRef = useRef<HTMLDivElement>(null);

  console.log(projectRef.current?.offsetTop);

  const updateSection = useCallback(() => {
    const el = projectRef.current;
    if (!el) return;
    registerSection("PROJECTS", el);
  }, [registerSection]);

  useEffect(() => {
    updateSection();
  }, [updateSection]);

  return (
    <Box bgColor={"orange.100"} minH={`100vh`} ref={projectRef}>
      <Text>Project</Text>
    </Box>
  );
};

export default Project;
