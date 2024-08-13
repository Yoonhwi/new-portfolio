import { Box } from "@chakra-ui/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface ShakeAnimationProps {
  children: React.ReactNode;
}

const duration = 0.1;

const ShakeAnimation = ({ children }: ShakeAnimationProps) => {
  const [width, setWidth] = useState(0);

  const boxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    const content = contentRef.current;
    if (!box || !content) return;
    setWidth(content.offsetWidth);

    const tl = gsap
      .timeline({ delay: 2 })
      .to(box, { rotation: 15, duration })
      .to(box, { rotation: -15, duration })
      .to(box, { rotation: 10, duration })
      .to(box, { rotation: -10, duration })
      .to(box, { rotation: 5, duration })
      .to(box, { rotation: -5, duration })
      .to(box, { rotation: 0, duration });

    return () => {
      tl.kill();
    };
  }, []);

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
