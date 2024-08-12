import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import DrawerStacks from "./drawer-stacks";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["React", "TypeScript", "Chakra UI", "GSAP"],
};

const PortfolioDrawer = () => {
  return (
    <Flex direction={"column"} gap={10} fontSize={"16px"}>
      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>소개</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.
          </Text>
          <Text>
            Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어 직접
            제작하였습니다.
          </Text>
          <Text>
            GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께
            진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수
            있습니다.
          </Text>
          <Text>
            보시는 것 처럼 Drawer방식을 사용하여 프로젝트별 상세한 설명을 볼 수
            있도록 구현하였습니다.
          </Text>
          <Text>
            UI/UX를 중점적으로 고려하여, 다양한 디바이스에서도 사용이 가능하도록
            반응형으로 제작하였습니다.
          </Text>
          <Text>
            보다 더 매력적인 UI를 위해 다양한 애니메이션 효과를 적용하였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>기술 스택</Heading>
        <DrawerStacks tags={Stacks} />
      </Flex>

      <Box position="relative">
        <Divider borderWidth={"2px"} />
        <AbsoluteCenter bg="white" px="4">
          <Heading size={"sm"}>구현기능</Heading>
        </AbsoluteCenter>
      </Box>
    </Flex>
  );
};

export default PortfolioDrawer;
