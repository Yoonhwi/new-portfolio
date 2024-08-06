import {
  AbsoluteCenter,
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import DrawerStacks from "./drawer-stacks";

const Stacks: { [key: string]: string[] } = {
  Frontend: ["HTML/CSS", "React", "TypeScript", "Next.js", "React-Query"],
  Backend: ["Node.js", "MySql"],
};

const CalendarDrawer = () => {
  return (
    <Flex direction={"column"} gap={10} fontSize={"16px"}>
      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>목표</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            이 프로젝트는 데스크톱, 테블릿, 모바일 등 다양한 디바이스와 화면
            크기에 대응하기 위해 반응형으로 구현합니다.
          </Text>
          <Text>
            Axios로 API를 구현하던 중 데이터의 상태 관리를 위해 다양한 훅을
            작성하다가 이를 편리하게 도 와주는 React-Query에 대해 알게 되었고
            사용해 보고자 했습니다.
          </Text>
          <Text>
            이 목적에 맞게 대중적인 TodoList와 Calendar를 결합한 형태의
            프로젝트를 주제로 선정했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>소개</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>TodoList와 Calendar를 결합한 형태의 프로젝트입니다.</Text>
          <Text>사용자는 할 일을 등록하고, 수정하며, 삭제할 수 있습니다.</Text>
          <Text>
            등록한 할 일은 TodoList에 표시되어 사용자는 한 눈에 확인할 수
            있습니다.
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
        <Heading size={"sm"}>로그인</Heading>
        <Center boxShadow={"md"} p={"4"}>
          <Image src="img/project_calendarlogin.gif" alt="calendarlogin" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            Cooka 프로젝트에서 사용하던 session 로그인 방식은 서버에 정보를
            저장함으로써 부담을 줄 수 있다는 문제점이 있었습니다. 이를 해결하기
            위해 JWT 토큰을 활용한 로그인 방식을 구현하였습니다.
          </Text>
          <Text>
            React에서 제공하는 CSS Transition을 활용하여 페이지 이동 없이
            매끄러운 회원가입 화면 전환을 구현하였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>데이터관리</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            React-Query를 활용하여 CRUD 기능을 구현했습니다. 이를 통해 서버
            상태를 효율적으로 관리하고, 데이터 페칭과 캐싱을 자동화하여 UX를
            향상시켰습니다.
          </Text>
          <Text>
            특히, 데이터가 변경될 때마다 자동으로 최신 상태를 반영하여 사용자가
            항상 최신 정보를 볼 수 있도록 했습니다.
          </Text>
          <Text>
            또한, 불필요한 리렌더링을 줄이고 코드의 복잡성을 낮춰 유지보수가
            용이해졌습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>디자인</Heading>
        <Center boxShadow={"md"}>
          <Image src="img/project_calendartodo.gif" alt="calendartodo" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            UI/UX를 고려하며 디자인을 진행하는 도중 자연스러운 애니메이션 효과를
            적용하기 위해 CSS Transition을 활용했습니다.
          </Text>
          <Text>
            화면 크기에 동적으로 대응하는 CSS 코드를 작성하여 반응형 디자인이
            적용된 웹을 구현했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>마치며 느낀점</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            이 프로젝트를 통해 다양한 디바이스에 대응하는 반응형 웹 개발의
            중요성과 방법을 배울 수 있었습니다.
          </Text>
          <Text>
            React-Query를 활용한 데이터 관리 방법을 익히면서 상태 관리의
            효율성을 개선할 수 있었고, 이를 통해 사용자 경험을 향상시킬 수
            있었습니다.
          </Text>
          <Text>
            CSS Transition을 활용한 자연스러운 애니메이션 효과를 적용하는 방법을
            익히면서 UI/UX 디자인에 대한 이해를 높일 수 있었습니다.
          </Text>
          <Text>
            최신 웹 기술을 적용하고 문제를 해결하며 많은 성장을 이루었다고
            생각합니다.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CalendarDrawer;
