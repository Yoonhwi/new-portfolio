import { parentBoxShadow } from "@/constants";
import { useSection } from "@/hooks";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import AboutDescription from "./about-description";

const About = () => {
  const { registerSection } = useSection();

  const aboutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    registerSection("ABOUT", el);
  }, [registerSection]);

  return (
    <Box
      position={"relative"}
      ref={aboutRef}
      backgroundImage={`url(./img/portfolio_bg.jpg)`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      overflow={"hidden"}
      boxShadow={parentBoxShadow}
      zIndex={3}
    >
      <Box
        className="overlay"
        position="absolute"
        backgroundImage={`url(./img/portfolio_bg.jpg)`}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        transform={"translateY(100%)"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={3}
      />
      <Box ref={contentRef}>
        <AboutDescription />
      </Box>
    </Box>
  );
};

export default About;
