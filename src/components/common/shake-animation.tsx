import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface ShakeAnimationProps {
  children: React.ReactNode;
}

const duration = 0.1;

const ShakeAnimation = ({ children }: ShakeAnimationProps) => {
  const [ishovered, setIshovered] = useState(false);
  const [width, setWidth] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;
    if (!box || !content) return;

    setWidth(content.offsetWidth);
    let tl: gsap.core.Timeline;

    const handleMouseEnter = () => {
      if (ishovered) return;
      setIshovered(true);

      tl = gsap
        .timeline()
        .to(box, { rotation: 15, duration })
        .to(box, { rotation: -15, duration })
        .to(box, { rotation: 10, duration })
        .to(box, { rotation: -10, duration })
        .to(box, { rotation: 5, duration })
        .to(box, { rotation: -5, duration })
        .to(box, { rotation: 0, duration });
    };

    const handleMouseLeave = () => {
      setIshovered(false);
      if (tl) {
        tl.kill();
      }
      gsap.to(box, { rotation: 0, duration });
    };

    box.addEventListener("mouseenter", handleMouseEnter);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      box.removeEventListener("mouseenter", handleMouseEnter);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ishovered]);

  return (
    <Box
      ref={boxRef}
      position="relative"
      display="inline-block"
      w={`${width}px`}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        height="100%"
        transform="rotate(0deg)"
        transformOrigin="center center"
        ref={contentRef}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ShakeAnimation;
