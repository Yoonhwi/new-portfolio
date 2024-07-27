import { Box, Center, IconButton, Tooltip, keyframes } from "@chakra-ui/react";
import { ReactElement } from "react";

interface IconAnimationProps {
  icon: ReactElement;
  label: string;
  link: string;
}

const iconAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const IconAnimation = ({ icon, label, link }: IconAnimationProps) => {
  return (
    <Tooltip label={label} bg={"blackAlpha.300"}>
      <Center
        position={"relative"}
        onClick={() => {
          window.open(link, "_blank");
        }}
        cursor={"pointer"}
      >
        <IconButton
          isRound
          aria-label="github-icon"
          icon={icon}
          _hover={{
            color: "primary.500",
            bgColor: "white",
            "& + div": {
              visibility: "visible",
            },
          }}
          size={"lg"}
        />

        <Box
          borderRight={"2px solid #171923"}
          borderTop={"2px solid white"}
          borderBottom={"2px solid white"}
          borderLeft={"2px solid white"}
          borderRadius={"full"}
          w={"48px"}
          h={"48px"}
          position={"absolute"}
          animation={`${iconAnimation} 1s linear infinite`}
          visibility={"hidden"}
          _hover={{
            visibility: "visible",
          }}
        />
      </Center>
    </Tooltip>
  );
};

export default IconAnimation;
