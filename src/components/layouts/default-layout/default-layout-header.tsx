import { SectionName } from "@/constants";
import { useScrollStore } from "@/store";
import { Text, Flex, HStack } from "@chakra-ui/react";
import { useCallback } from "react";

interface NavLinkProps {
  name: SectionName;
}

const navLinks: NavLinkProps[] = [
  { name: "INTRO" },
  { name: "ABOUT" },
  { name: "PROJECTS" },
  { name: "CONTACT" },
];

const DefaultLayoutHeader = () => {
  const { sections } = useScrollStore(["sections"]);

  const scrollHandler = useCallback(
    (name: SectionName) => {
      window.scrollTo({ top: sections[name], behavior: "smooth" });
    },
    [sections]
  );
  return (
    <>
      <Flex
        as={"header"}
        w={"100%"}
        position={"fixed"}
        top={0}
        zIndex={99}
        px={8}
      >
        <Flex
          w={"100%"}
          justifyContent={"end"}
          alignItems={"center"}
          h={"70px"}
        >
          <HStack spacing={12} as={"nav"} fontSize={20} fontWeight={600}>
            {navLinks.map((link) => (
              <Text
                key={link.name}
                onClick={() => scrollHandler(link.name)}
                _hover={{
                  cursor: "pointer",
                }}
                color={"white"}
              >
                {link.name}
              </Text>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};

export default DefaultLayoutHeader;
