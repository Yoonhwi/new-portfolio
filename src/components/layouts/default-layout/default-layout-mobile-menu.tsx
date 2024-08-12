import { lightFilter, navLinks } from "@/constants";
import { useSection } from "@/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import gsap from "gsap";
import { useCallback, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const DefaultLayoutMobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentSection, scrollToSection } = useSection();
  const iconRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const timelines = useRef<gsap.core.Timeline[]>([]);

  useEffect(() => {
    if (!iconRef.current) return;
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
      delay: 2,
    });
    tl.fromTo(
      iconRef.current,
      {
        opacity: 0,
        x: "100%",
      },
      {
        opacity: 1,
        x: "0%",
      }
    );
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    if (!timelines.current.length) return;
    timelines.current[index].play();
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    if (!timelines.current.length) return;
    timelines.current[index].reverse();
  }, []);

  const onDrawer = useCallback(() => {
    if (isOpen) return;
    onOpen();

    setTimeout(() => {
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
    }, 500);
  }, [isOpen, onOpen]);

  return (
    <>
      {!isOpen && (
        <Flex
          as={"header"}
          w={"100%"}
          position={"fixed"}
          top={0}
          zIndex={99}
          p={4}
          justifyContent={"end"}
          ref={iconRef}
        >
          <Icon
            as={GiHamburgerMenu}
            color={"white"}
            fontSize={"30px"}
            _hover={{
              cursor: "pointer",
            }}
            onClick={onDrawer}
          />
        </Flex>
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgColor={"blackAlpha.800"}>
          <DrawerCloseButton color={"white"} fontSize={"14px"} />
          <DrawerBody>
            <Flex h={"100%"} alignItems={"center"} justifyContent={"center"}>
              <Flex direction={"column"} gap={12} alignItems={"center"}>
                {navLinks.map((link, i) => (
                  <Text
                    key={link.name}
                    onClick={() => {
                      onClose();
                      scrollToSection(link.name);
                    }}
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
                    filter={currentSection === link.name ? lightFilter : ""}
                  >
                    {link.name}
                  </Text>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DefaultLayoutMobileMenu;
