import { Flex } from "@chakra-ui/react";
import WideViewStacksItem from "./pc-view-stacks-item";

interface WideViewStacksBoxProps {
  stacks: {
    imgSrc: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

const WideViewStacksBox = ({ stacks }: WideViewStacksBoxProps) => {
  return (
    <Flex gap={8} alignItems={"center"}>
      {stacks.map((stack) => (
        <WideViewStacksItem
          key={stack.title}
          imgSrc={stack.imgSrc}
          alt={stack.alt}
          title={stack.title}
          description={stack.description}
        />
      ))}
    </Flex>
  );
};

export default WideViewStacksBox;
