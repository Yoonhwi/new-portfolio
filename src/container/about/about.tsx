import { useSection } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  const { registerSection } = useSection();

  return (
    <Box
      bgColor={"gray"}
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("ABOUT", el);
      }}
    >
      <Text>About</Text>
    </Box>
  );
};

export default About;
