import { useSection } from "@/hooks";
import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import HomeInfo from "./intro-text";
import { ScrollDownAnimation } from "@/components";

const Intro = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { registerSection } = useSection();

  const introRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationComplete(true);
      },
    });

    tl.set(imageRef.current, {
      clipPath: "circle(0% at 100% 0)",
      scale: 1.5,
    });

    tl.to(imageRef.current, {
      clipPath: "circle(150% at 100% 0)",
      scale: 1,
      duration: 2,
    });
  }, []);

  useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    registerSection("INTRO", el);
  }, [registerSection]);

  return (
    <Box
      bgColor={`rgba(0,0,0,0.5)`}
      h={`100vh`}
      position="relative"
      overflow={"hidden"}
      ref={introRef}
    >
      <Box
        ref={imageRef}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage={`url('./img/portfolio_bg.jpg')`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      />
      {isAnimationComplete && <HomeInfo />}
      {isAnimationComplete && <ScrollDownAnimation />}
    </Box>
  );
};

export default Intro;
