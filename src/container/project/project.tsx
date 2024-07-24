import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Project = () => {
  const { registerSection } = useSection();

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = projectRef.current;
    if (!el) return;
    registerSection("PROJECTS", el);
  }, [registerSection]);

  return (
    <Box bgColor={"orange.100"} minH={`100vh`} ref={projectRef}>
      <Text>Project</Text>
    </Box>
  );
};

export default Project;
