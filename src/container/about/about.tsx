import { CenterLayout } from "@/components";
import { useLayout, useSection } from "@/hooks";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import AboutChild from "./about-child";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isTrigger, setIsTrigger] = useState(false);

  const { registerSection } = useSection();
  const { isMobile } = useLayout();

  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const about = aboutRef.current;
    if (!about) return;

    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: about,
        start: "top 60%",
        onEnter: () => {
          setIsTrigger(true);
        },
      },
    });

    aboutTl.fromTo(
      about.querySelector(".overlay"),
      {
        clipPath: "inset(0 0 100% 0)",
      },
      {
        clipPath: "inset(0 0 0% 0)",
        duration: 2,
        ease: "power2.inOut",
      }
    );

    return () => {
      aboutTl.kill();
    };
  }, [isMobile, setIsTrigger]);

  return (
    <Box
      position="relative"
      minH={`100vh`}
      ref={(el) => {
        if (!el) return;
        registerSection("ABOUT", el);
        aboutRef.current = el;
      }}
      py={20}
      px={12}
      backgroundImage="url('./img/portfolio_bg.jpg')"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        className="overlay"
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="rgb(27,29,32)"
        backgroundImage={
          isTrigger && isMobile ? `url('./img/portfolio_bg7.jpg')` : "none"
        }
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        clipPath="inset(0 0 100% 0)"
      />

      <CenterLayout>
        {isTrigger && <AboutChild isMobile={isMobile} />}
      </CenterLayout>
    </Box>
  );
};

export default About;
