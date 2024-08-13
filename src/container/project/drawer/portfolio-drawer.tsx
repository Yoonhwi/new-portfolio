import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Heading,
  Image,
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

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>반응형</Heading>

        <Flex boxShadow={"md"} gap={2}>
          <Box flex={1}>
            <Image src="img/portfolio_stack.png" alt="portfolio_stack" />
          </Box>
          <Box flex={1}>
            <Image src="img/portfolio_stack2.png" alt="portfolio_stack" />
          </Box>
        </Flex>

        <Flex boxShadow={"md"} gap={2}>
          <Box flex={1}>
            <Image src="img/portfolio_about2.png" alt="portfolio_about" />
          </Box>
          <Box flex={1}>
            <Image src="img/portfolio_about.png" alt="portfolio_about" />
          </Box>
        </Flex>

        <Flex direction={"column"} gap={1}>
          <Text>
            다양한 디바이스에서 최적의 UI를 제공하기 위해 반응형으로
            제작하였습니다.
          </Text>
          <Text>
            breakpoint를 3개로 나누어 모바일, 태블릿, 데스크탑에 맞게
            최적화하였습니다.
          </Text>
          <Text>
            Stack의 모바일 및 태블릿 버전에서는 레이아웃을 Grid를 사용하여,
            태블릿 버전에서는 칼럼의 수를 2개, 모바일 버전에서는 1개로
            설정하였습니다. 데스크탑 버전에서는 Flex를 사용하여 가로로 정렬하고,
            마우스 hover 애니메이션 효과를 적용하였습니다.
          </Text>
          <Text>
            header의 navigation영역 또한 breakpoint에 따라 다르게 보이도록
            설정하였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>애니메이션</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            프토플리오를 제작하면서 다양한 애니메이션 효과를 적용하여 재미적인
            요소도 추가하고, 더 매력적인 UI를 제공하고자 하였습니다.
          </Text>
          <Text>
            GSAP 라이브러리를 사용해보고 싶었기 때문에, GSAP를 사용하여
            애니메이션 효과를 적용해 보았습니다.
          </Text>
          <Text>
            스크롤 위치에 따라 발생하는 애니메이션 , 마우스 hover에 따른
            애니메이션 등 다양한 애니메이션 효과를 적용하였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>마치며</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            포트폴리오를 보는 입장에서 불편함 없는 UI를 제공하고 싶었고, 어떻게
            더 매력적으로 보일 수 있을까에 대해 많이 고민하며 제작하였습니다.
          </Text>
          <Text>
            이 과정에서 단순히 기능을 구현하는 것을 넘어 사용자의 관점에서
            생각하는 능력을 기를 수 있었습니다.
          </Text>
          <Text>
            앞으로도 끊임없이 학습하고 성장하는 개발자가 되고 싶습니다.이
            포트폴리오가 제가 지금까지 쌓아온 역량과 앞으로의 가능성을 잘 보여줄
            수 있기를 바랍니다.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PortfolioDrawer;
