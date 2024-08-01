import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Image,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { MdLocationSearching } from "react-icons/md";

const ProjectPortfolio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex gap={6} direction={"column"} maxW={"800px"}>
      <Image src={"./img/project_portfolio1.png"} maxH={"400px"} />
      <Heading size={"lg"}>Winhwi's Portfolio</Heading>
      <Flex direction={"column"} gap={1}>
        <Text>
          이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.
        </Text>
        <Text>
          Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어, 직접
          제작하였습니다.
        </Text>
        <Text>
          GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께
          진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수 있습니다.
        </Text>
      </Flex>

      <Flex gap={2}>
        <Tag>#React</Tag>
        <Tag>#TypeScript</Tag>
        <Tag>#반응형</Tag>
      </Flex>

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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent maxW={"1200px"}>
          <DrawerCloseButton />
          <DrawerHeader>head</DrawerHeader>
          <DrawerBody overflowY={"auto"}>
            <Flex direction={"column"} gap={"8"}></Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default ProjectPortfolio;
