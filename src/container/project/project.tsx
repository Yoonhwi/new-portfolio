import { useResizeOffsetTop } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

const Project = () => {
  const projectRef = useRef<HTMLDivElement>(null);
  useResizeOffsetTop({ ref: projectRef, name: "PROJECTS" });
  return (
    <Box bgColor={"orange.100"} minH={`100vh`} ref={projectRef}>
      <Text>Project</Text>
    </Box>
  );
};

export default Project;
