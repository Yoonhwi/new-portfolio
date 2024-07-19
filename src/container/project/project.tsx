import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";

const Project = () => {
  const { registerSection } = useSection();

  return (
    <Box
      bgColor={"orange.100"}
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("PROJECTS", el);
      }}
    >
      <Text>Project</Text>
    </Box>
  );
};

export default Project;
