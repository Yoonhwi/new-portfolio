import { SectionName } from "@/constants";
import { useSection } from "@/hooks";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";

interface NavLinkProps {
  name: SectionName;
}

const navLinks: NavLinkProps[] = [
  { name: "INTRO" },
  { name: "ABOUT" },
  { name: "STACKS" },
  { name: "PROJECTS" },
  { name: "CONTACT" },
];

const DefaultLayoutHeader = () => {
  const { currentSection, scrollToSection } = useSection();
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
      delay: 2,
    });

    tl.fromTo(
      boxRef.current,
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: "0%",
      }
    );

    textRefs.current.forEach((textRef, index) => {
      if (!textRef) return;
      const tl = gsap.timeline({ paused: true });
      tl.fromTo(
        textRef,
        { "--border-width-left": "0%", "--border-width-right": "0%" },
        {
          "--border-width-left": "50%",
          "--border-width-right": "50%",
          duration: 0.3,
          ease: "power2.out",
        }
      );
      timelines.current[index] = tl;
    });

    const tc = timelines.current;

    return () => {
      tc.forEach((tl) => tl.kill());
    };
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    timelines.current[index].play();
  }, []);

  const handleMouseLeave = useCallback(
    (index: number) => {
      if (currentSection === navLinks[index].name) return;
      timelines.current[index].reverse();
    },
    [currentSection]
  );

  useEffect(() => {
    textRefs.current.forEach((textRef, index) => {
      if (!textRef) return;
      if (navLinks[index].name === currentSection) {
        timelines.current[index].play();
      } else {
        timelines.current[index].reverse();
      }
    });
  }, [currentSection]);

  return (
    <Box zIndex={99}>
      <Flex
        as={"header"}
        w={"100%"}
        position={"fixed"}
        top={0}
        zIndex={99}
        px={8}
        ref={boxRef}
      >
        <Flex
          w={"100%"}
          justifyContent={"end"}
          alignItems={"center"}
          h={"70px"}
        >
          <HStack spacing={12} as={"nav"} fontSize={20} fontWeight={600}>
            {navLinks.map((link, i) => (
              <Text
                key={link.name}
                onClick={() => scrollToSection(link.name)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
                ref={(el) => (textRefs.current[i] = el)}
                _hover={{
                  cursor: "pointer",
                }}
                color={"white"}
                position="relative"
                sx={{
                  "--border-width-left": "0%",
                  "--border-width-right": "0%",
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    height: "2px",
                    backgroundColor: "white",
                  },
                  "&::before": {
                    left: "50%",
                    width: "var(--border-width-left)",
                  },
                  "&::after": {
                    right: "50%",
                    width: "var(--border-width-right)",
                  },
                }}
              >
                {link.name}
              </Text>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DefaultLayoutHeader;
