interface ProjectData {
  name: string;
  description: string[];
  tags: string[];
}

export const portfolioData: ProjectData = {
  name: "Winhwi's Portfolio",
  description: [
    "이 웹페이지는 포트폴리오 용도로 제작된 React 기반의 웹사이트입니다.",
    "Notion이나 PDF보다는 저만의 포트폴리오 웹사이트를 가지고 싶어, 직접 제작하였습니다.",
    "GitHub와 블로그 주소를 확인할 수 있으며, 간단한 자기소개와 함께 진행했던 프로젝트의 이미지, 링크, 그리고 상세한 설명을 볼 수 있습니다.",
  ],
  tags: ["#React", "#TypeScript", "#반응형"],
};

export const joinusData: ProjectData = {
  name: "Join-us",
  description: [
    "Join-US는 공통의 관심사나 목적을 가진 사람들이 한데 모여 소통 및 다양한 활동을 할 수 있는 플랫폼입니다.",
    "Git을 이용한 협업을 통해 백엔드 개발자와 함께 API명세를 작성하고, 이슈를 남기며 소통하는 과정을 통해 협업 과정에 대해 배울 수 있었습니다.",
  ],
  tags: ["#React", "#TypeScript", "#React-Query", "#Chakra-UI"],
};
