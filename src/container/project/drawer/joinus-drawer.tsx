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
  Frontend: ["React", "TypeScript", "Next.js", "React-Query", "Chakra UI"],
};

const JoinusDrawer = () => {
  return (
    <Flex direction={"column"} gap={10} fontSize={"16px"}>
      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>목표</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            Git을 이용한 협업을 통해 백엔드 개발자와 함께 API 명세를 작성하고,
            이슈를 남기며 소통하는 과정을 통해 협업 과정에 대해 이해합니다.
          </Text>
          <Text>
            WebSocket을 이용한 실시간 채팅 서비스를 구현하고, 이를 통해 사용자
            간의 원활한 소통을 목표로 하고 있습니다.
          </Text>
          <Text>
            모바일 기기가 주를 이루는 트렌드에 맞춰 데이터를 인피니티 스크롤로
            불러오는 방식을 적용하여 사용자 경험을 향상시키고자 합니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}> 소개</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>프론트엔드2명, 백엔드1명 총 3인의 팀 프로젝트입니다.</Text>
          <Text>
            공통의 관심사나 목적을 가진 사람들이 한데 모여 소통 및 다양한 활동을
            할 수 있는 플랫폼입니다.
          </Text>
          <Text>
            플랫폼의 유저들은 클럽을 생성하고, 원하는 클럽에 참여할 수 있습니다.
          </Text>
          <Text>
            디자인에는 Chakra UI 라이브러리를 활용하여 작업 속도와 UI의 퀄리티를
            향상 시켰습니다.
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
        <Heading size={"sm"}> 공통</Heading>
        <Center boxShadow={"md"} p={1}>
          <Image
            src="img/project_joinusinfinitescroll.gif"
            alt="joinusinfinitescroll"
          />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            모바일 기기의 점유율 증가에 따라 다양한 디바이스에 대응하기 위해
            레이아웃에 Flex나 Grid를 적극 사용하여 화면넓이별 direction을
            변경해주는 반응형 코드를 추가했습니다.
          </Text>
          <Text>
            Form 태그가 늘어나면서 불필요한 리렌더링이 늘어나고 유효성 검사 등
            코드가 복잡해질수록 일관적인 코드를 작성하기 어려움을 느꼈습니다.
            비제어 컴포넌트를 사용하여 리렌더링을 최소화해주고 Form관리에 필요한
            다양한 기능을 제공해주는 React-hook-form을 도입하였습니다.
          </Text>
          <Text>
            모바일 기기가 주류인 트렌드에 맞춰 데이터를 인피니티 스크롤로
            표시하려고 했습니다.데이터를 가져오기 위해 React-Query의
            useInfinityQuery 훅을 사용했습니다. 그러나 데이터가 천 개, 만 개씩
            증가함에 따라 DOM 요소가 늘어나면서 딜레이가 심해지는 문제가
            발생했습니다. 이 문제를 해결하기 위해 가상화를 통한 성능 향상이
            필요함을 알게 되었고, 이를 위해 Tanstack Virtual 라이브러리 를
            사용하여 가상화를 구현했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>그룹</Heading>
        <Center boxShadow={"md"} p={"4"}>
          <Image src="img/project_joinusclub.gif" alt="joinusclub" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            사용자들은 새로운 그룹을 생성하고 필요에 따라 수정할 수 있습니다.
          </Text>
          <Text>
            기존 이미지 슬라이딩 방식에서는 전체 이미지를 x축으로 나열하고,
            하나의 이미지 크기만 보이도록 설정한 후, 다음 버튼을 클릭하면 해당
            이미지 크기만큼 x축으로 이동시키는 방식을 사용했습니다. 마지막
            이미지에서 첫 이미지로의 전환이 부드럽지 않다는 문제를 해결하기 위해
            Swiper를 도입하여 Swiper 컴포넌트를 만들고, 제너릭 타입을 정의하여
            재사용성을 높였습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>채팅</Heading>
        <Center boxShadow={"md"} p={"4"}>
          <Image src="img/project_joinuschat.gif" alt="joinuschat" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            각 그룹은 전용 채팅방을 가지고 있어, 그룹 내 의사소통을 실시간으로
            원할하게 할 수 있습니다.
          </Text>
          <Text>
            채팅은 모두 데이터베이스에 저장되며, 채팅방에 입장할 때 최초 1회만
            데이터를 불러옵니다
          </Text>
          <Text>
            API를 1회 호출한 후, 실시간 채팅을 위해 백엔드 개발자와 프로토콜을
            정의하여 WebSocket을 구현하였습니다. 이로써 메시지의 타입에 따라
            적용되는 비즈니스 로직에 차별을 두었습니다.
          </Text>
          <Text>
            스크롤의 현재 위치에 따라 새로운 메시지를 트래킹할지 여부를
            결정합니다. 오래된 메시지를 보고 있다면 스크롤이 유지됩니다
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>마치며 느낀점</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            마치며, 이 프로젝트를 통해 여러 가지 중요한 개발 경험을 쌓을 수
            있었습니다.
          </Text>
          <Text>
            백엔드 개발자와의 협업을 통해 API 명세서를 작성하고 이슈를 해결하고,
            프론트엔드 팀원과 코드 컨벤션과 UI를 맞추는 과정을 통해 협업에 대한
            이해를 높일 수 있었고, 팀워크의 중요성을 다시 한번 느꼈습니다.
          </Text>
          <Text>
            다양한 디바이스에 대응하기 위해 반응형 디자인을 적용하고,
            WebSocket을 이용한 실시간 채팅 서비스는 빠르고 끊김 없는 소통을
            제공하였고,무한 스크롤과 데이터 가상화 기술은 대량의 데이터를
            효율적으로 처리하여 성능 문제를 해결했습니다. 이러한 과정들을 통해
            사용자 중심의 서비스를 제공하겠다는 제 생각을 더욱 확고히 다질 수
            있었습니다.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default JoinusDrawer;
