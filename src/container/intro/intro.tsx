import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import HomeInfo from "./intro-text";
import { useResizeOffsetTop } from "@/hooks";

const Intro = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useResizeOffsetTop({ ref: introRef, name: "INTRO" });

  useEffect(() => {
    if (!imageRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationComplete(true);
      },
    });

    gsap.set(imageRef.current, {
      clipPath: "circle(0% at 100% 0)",
      scale: 1.5,
    });

    tl.to(imageRef.current, {
      clipPath: "circle(150% at 100% 0)",
      scale: 1,
      duration: 2,
    });
  }, []);

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
    </Box>
  );
};

export default Intro;
