import { darkBgColor } from "@/constants";
import { Flex, Box, Heading, Image, Text, Center } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface StacksContentItemProps {
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
}

const StacksContentItem = ({
  imgSrc,
  alt,
  title,
  description,
}: StacksContentItemProps) => {
  const flexRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!flexRef.current || !contentRef.current || !imgRef.current) return;

    const tl = gsap
      .timeline({ paused: true })
      .to(imgRef.current, {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        border: "none",
        opacity: 1,
        duration: 0.001,
      })

      .to(
        flexRef.current,
        {
          width: "300px",
          height: "162px",
          duration: 0.3,
        },
        "<"
      )

      .to(
        contentRef.current,
        {
          display: "flex",
          opacity: 1,
          duration: 0.3,
        },
        ">"
      );

    setTimeline(tl);

    return () => {
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timeline?.play();
  };

  const handleMouseLeave = () => {
    timeline?.reverse();
  };

  return (
    <Flex
      bgColor={darkBgColor}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      flexShrink={0}
      h={"162px"}
      overflow={"hidden"}
      position={"relative"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Center
        border={"2px solid rgb(40, 40, 40)"}
        w={"78px"}
        h={"78px"}
        ref={flexRef}
        position={"relative"}
      >
        <Center
          p={3}
          flexShrink={0}
          className="img-content"
          ref={imgRef}
          overflow={"hidden"}
          zIndex={3}
          position={"relative"}
        >
          <Image src={imgSrc} w={"50px"} h={"50px"} alt={alt} flexShrink={0} />
        </Center>
        <Box
          className="hidden-content"
          bgColor={darkBgColor}
          p={4}
          display={"none"}
          opacity={0}
          ref={contentRef}
          pl={"78px"}
        >
          <Flex direction={"column"} gap={1}>
            <Heading size={"sm"}>{title}</Heading>
            <Text fontSize={"13px"}>{description}</Text>
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
};

export default StacksContentItem;
