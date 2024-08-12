import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutText from "./about-text";

interface AboutChildProps {
  isMobile: boolean;
}

const AboutChild = ({ isMobile }: AboutChildProps) => {
  const childRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power3.out" },
      delay: 1,
    });

    tl.fromTo(
      [childRef.current, imgRef.current],
      { opacity: 0, x: (index) => ["100%", "-100%"][index] },
      { opacity: 1, x: "0%" }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <Box color={"white"} position={"relative"} minH={"700px"} ref={childRef}>
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
          ref={imgRef}
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
        <Heading
          size={{ md: "2xl", lg: "3xl" }}
          display={{ base: "none", md: "block" }}
        >
          THE ONLY LIMIT IS MY EFFORT!
        </Heading>
        <AboutText />
      </Flex>
    </Box>
  );
};

export default AboutChild;
