import { CenterLayout } from "@/components";
import { useSection } from "@/hooks";
import { Box, Flex, Heading } from "@chakra-ui/react";
import AboutText from "./about-text";

const About = () => {
  const { registerSection } = useSection();

  return (
    <Box
      backgroundColor={"rgb(27,29,32)"}
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("ABOUT", el);
      }}
      py={32}
    >
      <CenterLayout>
        <Box color={"white"} position={"relative"} minH={"800px"}>
          <Box
            backgroundImage={`url('./img/portfolio_bg6.jpg')`}
            backgroundSize={"contain"}
            backgroundRepeat={"no-repeat"}
            position={"absolute"}
            left={0}
            top={0}
            bottom={0}
            minH={"800px"}
            minW={"400px"}
          />
          <Flex
            direction={"column"}
            zIndex={1}
            position={"relative"}
            h={"100%"}
            justifyContent={"center"}
            gap={24}
          >
            <Heading size={"3xl"} pl={24}>
              THE ONLY LIMIT IS MY EFFORT !
            </Heading>
            <AboutText />
          </Flex>
        </Box>
      </CenterLayout>
    </Box>
  );
};

export default About;
