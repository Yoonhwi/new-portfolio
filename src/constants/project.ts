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
