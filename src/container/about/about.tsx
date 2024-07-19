import { useResizeOffsetTop } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useResizeOffsetTop({ ref: aboutRef, name: "ABOUT" });

  return (
    <Box bgColor={"gray"} minH={`100vh`} ref={aboutRef}>
      <Text>About</Text>
    </Box>
  );
};

export default About;
