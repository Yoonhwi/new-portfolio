import { CenterLayout } from "@/components";
import { useLayout, useSection } from "@/hooks";
import { Box, Flex, Heading } from "@chakra-ui/react";
import AboutText from "./about-text";

const About = () => {
  const { registerSection } = useSection();
  const { isMobile } = useLayout();

  return (
    <Box
      backgroundColor={"rgb(27,29,32)"}
      backgroundImage={isMobile ? `url('./img/portfolio_bg7.jpg')` : ""}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("ABOUT", el);
      }}
      py={20}
      px={12}
    >
      <CenterLayout>
        <Box color={"white"} position={"relative"} minH={"800px"}>
          {!isMobile && (
            <Box
              backgroundImage={`url('./img/portfolio_bg7.jpg')`}
              backgroundSize={"cover"}
              backgroundRepeat={"no-repeat"}
              position={"absolute"}
              left={0}
              top={20}
              bottom={0}
              width={"650px"}
              height={"650px"}
              borderRadius={"100%"}
              boxShadow={"dark-lg"}
            />
          )}
          <Flex
            direction={"column"}
            zIndex={1}
            position={"relative"}
            h={"100%"}
            justifyContent={"center"}
            gap={24}
          >
            <Heading size={"3xl"}>THE ONLY LIMIT IS MY EFFORT !</Heading>
            <AboutText />
          </Flex>
        </Box>
      </CenterLayout>
    </Box>
  );
};

export default About;
