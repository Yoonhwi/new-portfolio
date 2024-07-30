import { CenterLayout } from "@/components";
import { darkBgColor, parentBoxShadow } from "@/constants";
import { useSection } from "@/hooks";
import { Box, Flex, Heading, Icon, Image, Tag, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const Project = () => {
  const { registerSection } = useSection();

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = projectRef.current;
    if (!el) return;
    registerSection("PROJECTS", el);
  }, [registerSection]);

  return (
    <Box
      minH={"100vh"}
      bgColor={darkBgColor}
      ref={projectRef}
      py={24}
      boxShadow={parentBoxShadow}
      position={"relative"}
      zIndex={1}
    >
      <CenterLayout>
        <Flex
          direction={"column"}
          w={"100%"}
          gap={12}
          color={"white"}
          alignItems={"center"}
        >
          <Heading size={"2xl"}>PROJECTS</Heading>
          <Flex gap={6} direction={"column"} maxW={"800px"}>
            <Image
              src={"./img/project_portfolio1.png"}
              maxW={"800px"}
              maxH={"400px"}
            />

            <Heading size={"lg"}>Winhwi's Portfolio</Heading>

            <Flex direction={"column"} gap={1}>
              <Text>
                이 웹페이지는 포트폴리오 용도로 제작된 React 기반의
                웹사이트입니다.
              </Text>
              <Text>
                Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어,
                직접 제작하였습니다.
              </Text>
              <Text>
                GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께
                진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수
                있습니다.
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
                  opacity: 0.8,
                  cursor: "pointer",
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
                  opacity: 0.8,
                  cursor: "pointer",
                }}
              >
                <Icon as={FiLink} color={"black"} fontSize={"20px"} />
                <Heading color={"black"} size={"sm"}>
                  Demo
                </Heading>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </CenterLayout>
    </Box>
  );
};

export default Project;
