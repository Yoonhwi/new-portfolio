import { Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={`
        body {
          font-family: "Pretendard Variable", "Noto Sans KR", "Poppins", sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyles;
