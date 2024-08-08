import { useBreakpointValue } from "@chakra-ui/react";

const useLayout = () => {
  const layout = useBreakpointValue({
    base: "small",
    md: "medium",
    lg: "large",
  })!;

  const isMobile = layout === "small" || layout === "medium";

  return {
    layout,
    isMobile,
  };
};

export default useLayout;
