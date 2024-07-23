import { useBreakpointValue } from "@chakra-ui/react";

const useLayout = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })!;

  return {
    isMobile,
  };
};

export default useLayout;
