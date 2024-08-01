import { Flex, Heading, Icon } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { MdLocationSearching } from "react-icons/md";

interface LinkProjectProps {
  onOpen: () => void;
}

const LinkProject = ({ onOpen }: LinkProjectProps) => {
  return (
    <Flex gap={2}>
      <Flex
        gap={2}
        alignItems={"center"}
        px={4}
        py={2}
        bgColor={"white"}
        _hover={{
          opacity: 0.7,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <Icon as={FaGithub} color={"black"} fontSize={"18px"} />
        <Heading color={"black"} size={"sm"}>
          Git Hub
        </Heading>
      </Flex>
      <Flex
        gap={2}
        alignItems={"center"}
        px={4}
        py={2}
        bgColor={"white"}
        _hover={{
          opacity: 0.7,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <Icon as={FiLink} color={"black"} fontSize={"20px"} />
        <Heading color={"black"} size={"sm"}>
          Demo
        </Heading>
      </Flex>
      <Flex
        gap={2}
        alignItems={"center"}
        px={4}
        py={2}
        bgColor={"purple.700"}
        _hover={{
          cursor: "pointer",
          bgColor: "purple.500",
          transition: "all 0.3s ease",
        }}
      >
        <Icon as={MdLocationSearching} color={"white"} fontSize={"20px"} />
        <Heading color={"white"} size={"sm"} onClick={onOpen}>
          자세히 보기
        </Heading>
      </Flex>
    </Flex>
  );
};

export default LinkProject;
