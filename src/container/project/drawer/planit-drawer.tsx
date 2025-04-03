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
  Frontend: ["HTML/CSS", "React"],
  Backend: ["Spring"],
};

const PlanItDrawer = () => {
  return (
    <Flex direction={"column"} gap={10} fontSize={"16px"}>
      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>목표</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            Just Plan It은 구름X카카오 풀스택 개발과정의 스터디에서 시작된
            프론트엔드 2명, 백엔드 2명으로 구성된 팀프로젝트 입니다. React와
            Spring에 대한 학습을 바탕으로 사용자 친화적인 웹을 만드는 것을
            목표로 2개월동안 진행했습니다.
          </Text>
          <Text>
            다양한 디바이스에서의 반응형 구현과 다크모드 적용 등 실사용자 환경을
            고려한 UI/UX 개선에 집중하였고, 이를 위해 지속적인 테스트와 피드백을
            반복했습니다.
          </Text>
          <Text>
            이전 프로젝트에서는 친한 친구들과 협업을 진행했다면, 이번에는
            스터디를 통해 만난 팀원들과 함께하면서 개발 실력뿐 아니라
            커뮤니케이션 능력과 협업 역량을 키우는 데에도 중점을 두었습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>소개</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            Just Plan It은 여행 계획을 복잡하게 느끼는 사람들도 쉽고 직관적으로
            여행 일정을 만들 수 있도록 돕는 플랫폼입니다.
          </Text>
          <Text>
            MBTI에서 계획 세우기를 어려워하는 P 성향의 사용자들도, 마치 J
            성향처럼 손쉽게 계획을 세울 수 있도록 지원하는 데 중점을 두었습니다.
          </Text>
          <Text>
            사용자들은 인기 게시글과 인기 여행 계획을 확인할 수 있으며, 원하는
            여행지를 선택하면 Google Map과 Google Place API를 활용해 해당 지역의
            맛집 정보를 제공받을 수 있습니다. 또한 OpenWeather API를 통해 날씨
            정보도 함께 확인할 수 있어 보다 실용적인 여행 준비가 가능합니다.
          </Text>
          <Text>
            여행 일정을 작성하면 각 일정이 지도에 시각화되어 표시되며, 일정 간의
            동선은 Google 지도로 연결되어 경로 파악도 간편하게 이루어집니다.
          </Text>
          <Text>
            게시글 페이지에서는 자유로운 잡담과 여행 후기를 공유할 수 있으며,
            이를 통해 커뮤니티 기능도 함께 제공합니다.
          </Text>
          <Text>
            관리자 페이지를 통해 신고된 게시물이나 유저를 제재할 수 있으며,
            게시글 삭제, 유저 강퇴, 배너 및 공지사항 관리가 가능합니다. 또한
            월별 가입자 통계나 인기 여행지를 차트로 시각화하여 확인할 수 있는
            기능도 포함되어있습니다.
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
          <Image src="img/project_planit_login.gif" alt="planit_login" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            위 GIF는 로그인 → 로그인 실패 → 비밀번호 찾기 → 재로그인 → 선호
            여행지 선택 → 마이페이지 진입 → 닉네임 및 프로필 사진 변경까지의
            사용자 흐름을 보여줍니다.
          </Text>
          <Text>
            로그인 기능은 JWT 기반 인증 방식을 사용하여 서버의 부담을 줄이면서도
            안정적인 사용자 인증을 구현하였으며, 소셜 로그인도 함께 지원합니다.
          </Text>
          <Text>
            화면 전환은 Framer Motion을 활용해 부드러운 애니메이션으로 구현하여
            매끄러운 사용자 경험을 제공하고자 했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>데이터관리</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            Axios를 사용해 API 통신을 구현하였으며, 공통 설정을 적용한
            axiosInstance를 생성하여 요청마다 중복 코드를 줄였습니다.
          </Text>
          <Text>
            유저 인증이 필요한 요청의 경우, endpoint와 method 정보를 별도로
            정의해 관리하고, 인터셉터를 통해 accessToken을 자동으로 헤더에
            삽입하여 요청이 이뤄지도록 구성했습니다.
          </Text>
          <Text>
            로딩 상태나 에러 처리를 효율적으로 관리하기 위해 공통 API 요청 훅을
            구현하고, context API 또는 별도 API 훅으로 구성하여 데이터 흐름을
            모듈화하였습니다.
          </Text>
          <Text>
            또한, 데이터 변경 시 최신 상태가 자동으로 반영되도록 리페칭 전략을
            적용하여 사용자에게 항상 최신 정보를 제공할 수 있도록 했습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>관리자 페이지</Heading>
        <Center boxShadow={"md"} p={"4"}>
          <Image src="img/project_planit_admin.jpg" alt="planit_login" />
        </Center>
        <Flex direction={"column"} gap={1}>
          <Text>
            관리자 페이지는 관리자 권한을 가진 유저만 접근할 수 있으며, 일반
            회원은 접근이 불가능하기 때문에 UI 화면을 따로 첨부하였습니다.
          </Text>
          <Text>
            관리자 페이지에서는 DB에 저장된 국가 및 도시 정보를 수정하거나
            삭제할 수 있는 권한이 존재하며, 이는 민감한 기능이기 때문에 일반
            사용자에게는 제공되지 않습니다.
          </Text>
          <Text>
            대시보드를 통해 사이트의 주요 통계 정보를 한눈에 확인할 수 있으며,
            월별 가입자 수와 인기 여행지를 차트로 시각화하여 제공합니다.
          </Text>
          <Text>
            또한, 신고된 게시물이나 유저를 확인하고 제재할 수 있으며, 배너 및
            공지사항을 등록하거나 수정할 수 있는 기능도 포함되어 있습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Heading size={"sm"}>마치며</Heading>
        <Flex direction={"column"} gap={1}>
          <Text>
            2개월 동안 팀원들과 함께 수업을 병행하며 프로젝트를 진행하는 과정은
            쉽지 않았지만, 빡빡한 일정 속에서도 원활한 커뮤니케이션과 상호
            존중을 바탕으로 끝까지 협력하며 프로젝트를 완성할 수 있었습니다.
          </Text>
          <Text>
            팀원들을 고려한 가독성 높은 코드 작성과 유지보수를 염두에 둔 구조
            설계를 고민하며, 개발자로서 한층 성장할 수 있었던 값진
            시간이었습니다. 단순한 결과물 이상의 의미를 가진, 팀원들과 함께한
            소중한 경험이었습니다.
          </Text>
        </Flex>
      </Flex>

      <Flex direction={"column"} gap={2}>
        <Text
          onClick={() => {
            window.open("https://justplanit.site", "_blank");
          }}
          cursor={"pointer"}
          color="blue.500"
        >
          🔗 배포 링크 : "https://justplanit.site/"
        </Text>
        <Text>테스트 계정 - ID: ush0105@naver.com / PW: 123456</Text>
        <Text>한 번 들어와 구경해주시면 정말 감사하겠습니다 😊</Text>
      </Flex>
    </Flex>
  );
};

export default PlanItDrawer;
