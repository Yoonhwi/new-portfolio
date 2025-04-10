import { Flex } from "@chakra-ui/react";

interface CenterLayoutProps {
  children?: React.ReactNode;
}
const CenterLayout = ({ children }: CenterLayoutProps) => {
  return (
    <Flex justify={"center"} h={"100%"} overflow={"hidden"}>
      <Flex w={{ base: "100%", lg: "992px" }}>{children}</Flex>
    </Flex>
  );
};

export default CenterLayout;
