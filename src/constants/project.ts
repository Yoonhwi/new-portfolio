import JustPlanItDrawer from "@/container/project/drawer/planit-drawer";
import CalendarDrawer from "@/container/project/drawer/calendar-drawer";
import CookaDrawer from "@/container/project/drawer/cooka-drawer";
import JoinusDrawer from "@/container/project/drawer/joinus-drawer";
import PortfolioDrawer from "@/container/project/drawer/portfolio-drawer";

export interface ProjectData {
  name: string;
  description: string[];
  tags: string[];
  imgSrc: string;
  link: {
    git: string;
    demo?: string;
  };
  drawerContent: () => JSX.Element;
}

export const justPlanItData: ProjectData = {
  name: "Just Plan It",
  description: [
    "Just Plan It은 여행 계획을 세우고 공유할 수 있는 웹 애플리케이션입니다.",
    "여행을 계획하고 공유하는 과정을 통해 여행에 대한 관심과 열정을 나누는 플랫폼입니다.",
    "이 프로젝트는 React를 사용하여 개발되었습니다.",
  ],
  tags: ["#React", "#Spring", "#반응형", "#다크모드"],
  imgSrc: "./img/project_planit.png",
  link: {
    git: "https://github.com/JandiGoorm/jandi_plan_frontend",
    demo: "https://justplanit.site",
  },
  drawerContent: JustPlanItDrawer,
};

export const portfolioData: ProjectData = {
  name: "Winhwi's Portfolio",
  description: [
    "이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.",
    "Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어, 직접 제작하였습니다.",
    "GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께 진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수 있습니다.",
  ],
  tags: ["#React", "#TypeScript", "#반응형"],
  imgSrc: "./img/project_portfolio1.png",
  link: {
    git: "https://github.com/Yoonhwi/new-portfolio",
  },
  drawerContent: PortfolioDrawer,
};

export const joinusData: ProjectData = {
  name: "Join-us",
  description: [
    "Join-US는 공통의 관심사나 목적을 가진 사람들이 한데 모여 소통 및 다양한 활동을 할 수 있는 플랫폼입니다.",
    "Git을 이용한 협업을 통해 백엔드 개발자와 함께 API명세를 작성하고, 이슈를 남기며 소통하는 과정을 통해 협업 과정에 대해 배울 수 있었습니다.",
  ],
  tags: ["#React", "#TypeScript", "#React-Query", "#Chakra-UI"],
  imgSrc: "./img/project_joinus1.png",
  link: {
    git: "https://github.com/Yoonhwi/joinus-FE",
  },
  drawerContent: JoinusDrawer,
};

export const calendarData: ProjectData = {
  name: "Calendar",
  description: [
    "다양한 디바이스와 화면 크기에 대응하기 위해 반응형 코드에 대해 고민하며 개발하였습니다.",
    "Axios로 API를 구현하던 중 데이터의 상태관리를 위해 다양한 훅을 작성하다가 이를 편리하게 도와주는 React-Query에 대해 알게 되었고 사용해 보고자 했습니다.",
    "이 목적에 맞게 대중적인 TodoList와 Calendar를 결합한 형태의 프로젝트를 주제로 선정했습니다.",
  ],
  tags: ["#React", "#TypeScript", "#React-Query", "#Node.js", "#MySQL"],
  imgSrc: "./img/project_calendar1.png",
  link: {
    git: "https://github.com/Yoonhwi/Calendar",
  },
  drawerContent: CalendarDrawer,
};

export const cookaData: ProjectData = {
  name: "Cooka",
  description: [
    "이 프로젝트는 백엔드와 프론트엔드에 대한 이해를 높이기 위해 진행한 첫 번째 풀스택 프로젝트입니다.",
    "React의 장점인 컴포넌트 기반 개발 방식을 이용하여 프론트엔드를 구현하였습니다.",
    "런타임 에러를 최소화 하기 위해 TypeScript를 도입하여 사용했습니다.",
  ],
  tags: ["#React", "#TypeScript", "#Node.js", "#MySQL"],
  imgSrc: "./img/project_cooka1.png",
  link: {
    git: "https://github.com/Yoonhwi/Cooka",
  },
  drawerContent: CookaDrawer,
};
