import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import AboutDescription from "./about-description";
import AboutStacks from "./about-stacks";
import { useSection } from "@/hooks";
import gsap from "gsap";
import { parentBoxShadow } from "@/constants";

const About = () => {
  const [type, setType] = useState("description");
  const { registerSection } = useSection();

  const aboutRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const renderItem = useMemo(() => {
    switch (type) {
      case "description":
        return <AboutDescription />;
      case "stacks":
        return <AboutStacks />;
      default:
        return <Text>Error Type!!</Text>;
    }
  }, [type]);

  const changeType = useCallback(
    (newType: string) => {
      if (newType === type) return;

      const overlay = aboutRef.current?.querySelector(".overlay");
      const content = contentRef.current;

      if (!overlay || !content) return;

      gsap.fromTo(
        overlay,
        {
          yPercent: 100,
        },
        {
          yPercent: -100,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            setType(newType);
            gsap.to(overlay, {
              yPercent: 100,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        }
      );
    },
    [type]
  );

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
      <Box ref={contentRef}>{renderItem}</Box>
      <Button
        position={"absolute"}
        bottom={20}
        left={"50%"}
        transform={`translateX(-50%)`}
        onClick={() =>
          changeType(type === "description" ? "stacks" : "description")
        }
        zIndex={2}
      >
        {type === "description" ? "자세히 보기" : "간단히 보기"}
      </Button>
    </Box>
  );
};

export default About;
